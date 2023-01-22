import { SolanaKey } from '@wknd/solana-utils';
import { SolanaProgramType } from '../enums';

/** Solana Program info with extra data */
export interface ISolanaProgramDetails {
  id: SolanaKey;
  type: SolanaProgramType;
  name?: string;
  description?: string;
  websiteUrl?: string;
  repoUrl?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;

  mainnetId: SolanaKey;
  devnetId?: SolanaKey;
  tags?: string[];
  idlId?: SolanaKey;
}
