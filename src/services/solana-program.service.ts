import { PublicKey } from '@solana/web3.js';
import {
  BaseLoggerService,
  IMap,
  LazySolanaKey,
  SolanaEndpointNetwork,
  SolanaKey,
  toKey,
  toKeyString,
} from '@wknd/solana-utils';
import { SOLANA_PROGRAM_IDS, SOLANA_PROGRAM_INFO } from '../consts';
import { SolanaProgramType } from '../enums';
import { ISolanaProgramDetails } from '../interfaces';

/** Resolve known program ids quickly */
export class SolanaProgramService {
  private readonly logPrefix = '[SolanaProgram]';
  private isInitialized = false;
  readonly reverseProgramMap: IMap<IMap<[SolanaProgramType, string]>>;

  constructor(protected readonly logger: BaseLoggerService) {
    this.reverseProgramMap = {};
    this.generateReverseProgramMap();
  }

  async init(): Promise<boolean> {
    if (this.isInitialized) {
      return false;
    }
    this.isInitialized = true;
    return true;
  }

  getPDA(seeds: (Uint8Array | Buffer)[], programId: SolanaKey): PublicKey {
    const result = PublicKey.findProgramAddressSync(seeds, toKey(programId));
    return result[0];
  }

  getProgramId(
    programType: SolanaProgramType,
    env: SolanaEndpointNetwork = 'mainnet-beta',
    version = 'latest'
  ): LazySolanaKey | null {
    const programIds = SOLANA_PROGRAM_IDS[programType];
    if (!programIds) {
      this.logger.logAt(5, `${this.logPrefix} No program ids entry for ${programType}`);
      return null;
    }

    if (version === 'latest') {
      version = Object.keys(programIds)[0];
    }

    if (!programIds[version]) {
      this.logger.logAt(5, `${this.logPrefix} No version entry for ${version}`);
      return null;
    }
    const envIds = programIds[version];
    const programKey = envIds[env];

    if (programKey) {
      return LazySolanaKey.from(programKey, true);
    }
    return null;
  }

  getProgramIdBase58(
    programType: SolanaProgramType,
    env: SolanaEndpointNetwork = 'mainnet-beta',
    version = 'latest'
  ): string {
    const programId = this.getProgramId(programType, env, version);
    if (!programId) {
      return '';
    }
    return toKeyString(programId);
  }

  getProgramIdKey(
    programType: SolanaProgramType,
    env: SolanaEndpointNetwork = 'mainnet-beta',
    version = 'latest'
  ): PublicKey | null {
    const programId = this.getProgramId(programType, env, version);
    if (!programId) {
      return null;
    }
    return toKey(programId);
  }

  getProgramType(programId: SolanaKey, env: SolanaEndpointNetwork = 'mainnet-beta'): SolanaProgramType {
    const envMap = this.reverseProgramMap[env];
    if (!envMap) {
      return SolanaProgramType.Unknown;
    }
    const reverseEntry = envMap[toKeyString(programId)];
    if (!reverseEntry) {
      return SolanaProgramType.Unknown;
    }
    return reverseEntry[0];
  }

  /** Get a program key from name present in parsed tx data */
  getProgramFromName(programName: string): PublicKey {
    const nameMap: IMap<string> = {
      ['spl-token']: this.getProgramIdBase58(SolanaProgramType.Token),
      ['system']: this.getProgramIdBase58(SolanaProgramType.System),
      ['spl-associated-token-account']: this.getProgramIdBase58(SolanaProgramType.AssociatedToken),
    };
    return toKey(nameMap[programName]);
  }

  getAllRegisteredPrograms(): IMap<ISolanaProgramDetails> {
    const programTypes = Object.keys(SOLANA_PROGRAM_IDS).map((x) => x as SolanaProgramType);
    const result: IMap<ISolanaProgramDetails> = {};

    programTypes.forEach((pt) => {
      const id = this.getProgramIdBase58(pt, 'mainnet-beta');
      result[pt] = {
        id,
        type: pt,
        mainnetId: id,
        name: pt.toString(),
        description: '',
        websiteUrl: '',
        tags: [],
      };
      if (SOLANA_PROGRAM_INFO[pt]) {
        const pi = SOLANA_PROGRAM_INFO[pt];
        result[pt] = { ...result[pt], ...pi };
      }
    });

    return result;
  }

  private generateReverseProgramMap() {
    const programTypes = Object.keys(SOLANA_PROGRAM_IDS).map((x) => x as SolanaProgramType);

    programTypes.forEach((pt) => {
      const programVersions = Object.keys(SOLANA_PROGRAM_IDS[pt]);
      programVersions.forEach((pv) => {
        const ids = SOLANA_PROGRAM_IDS[pt][pv];
        for (const key of Object.keys(ids)) {
          const env = key as SolanaEndpointNetwork;
          const id = ids[env];
          if (id) {
            if (!this.reverseProgramMap[env]) {
              this.reverseProgramMap[env] = {};
            }
            this.reverseProgramMap[env][toKeyString(id)] = [pt, pv];
          }
        }
      });
    });
  }
}
