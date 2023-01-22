import { SolanaKey } from '@wknd/solana-utils';

export interface ISolanaProgramEnvironmentIds {
  'mainnet-beta': SolanaKey;
  testnet?: SolanaKey;
  devnet?: SolanaKey;
  localnet?: SolanaKey;
}
