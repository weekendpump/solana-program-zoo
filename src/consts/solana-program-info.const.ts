import { IMap } from '@wknd/solana-utils';
import { SolanaProgramType } from '../enums/solana-program-type.enum';
import { ISolanaProgramDetails } from '../interfaces';

export const SOLANA_PROGRAM_INFO: IMap<Partial<ISolanaProgramDetails>> = {
  [SolanaProgramType.Serum]: {
    name: 'Serum DEX',
    tags: ['trade', 'clob'],
  },
  [SolanaProgramType.SerumCommunity]: {
    name: 'OpenBook',
    tags: ['trade', 'clob'],
    websiteUrl: 'https://openserum.io/',
    repoUrl: 'https://github.com/openbook-dex',
  },
  [SolanaProgramType.SerumSwap]: {
    name: 'Serum Swap',
    tags: ['trade'],
  },
  [SolanaProgramType.System]: {
    name: 'System',
    tags: ['system'],
  },
  [SolanaProgramType.ComputeBudget]: {
    name: 'System',
    tags: ['system'],
  },
  [SolanaProgramType.Config]: {
    name: 'Config',
    tags: ['system'],
  },
  [SolanaProgramType.Token]: {
    name: 'Token',
    tags: ['system'],
  },
  [SolanaProgramType.SplToken2022]: {
    name: 'Token 2022',
    tags: ['system'],
  },
  [SolanaProgramType.AssociatedToken]: {
    name: 'Associated Token',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarClock]: {
    name: 'Sysvar Clock',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarEpochSchedule]: {
    name: 'Sysvar Epoch Schedule',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarFees]: {
    name: 'Sysvar Fees',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarRecentBlockhashes]: {
    name: 'Sysvar Recent Blockhashes',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarRent]: {
    name: 'Sysvar Rent',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarRewards]: {
    name: 'Sysvar Rewards',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarSlotHashes]: {
    name: 'Sysvar Slot Hashes',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarSlotHistory]: {
    name: 'Sysvar Slot History',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarStakeHistory]: {
    name: 'Sysvar Stake History',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarInstructions]: {
    name: 'Sysvar Instructions',
    tags: ['system'],
  },
  [SolanaProgramType.SysvarEpochSchedule]: {
    name: 'Sysvar Epoch Schedule',
    tags: ['system'],
  },
  [SolanaProgramType.AddressLookupTable]: {
    name: 'Address Lookup Table',
    tags: ['system'],
  },
  [SolanaProgramType.SolanaStake]: {
    name: 'Solana Stake',
    tags: ['system'],
  },
  [SolanaProgramType.BpfUpgradeLoader]: {
    name: 'BPF Upgrade Loader',
    tags: ['system'],
  },
  [SolanaProgramType.Vote]: {
    name: 'Solana Vote',
    tags: ['system'],
  },
  [SolanaProgramType.SplGovernance]: {
    name: 'Spl Governance',
    tags: ['solana', 'governance'],
  },
  [SolanaProgramType.SplGovernanceChat]: {
    name: 'Spl Governance Chat',
    tags: ['solana', 'governance', 'chat'],
  },
  [SolanaProgramType.PythGovernance]: {
    name: 'Pyth Governance',
    tags: ['pyth', 'oracle', 'governance'],
  },
  [SolanaProgramType.PythStaking]: {
    name: 'Pyth Staking',
    tags: ['pyth', 'oracle', 'stake'],
  },
  [SolanaProgramType.MangoGovernance]: {
    name: 'Mango Governance',
    tags: ['mango', 'governance'],
  },
  [SolanaProgramType.MangoReimbursement]: {
    name: 'Mango Reimbursement',
    tags: ['mango', 'governance'],
  },
  [SolanaProgramType.MangoRiskCheck]: {
    name: 'Mango Risk Check',
    tags: ['mango', 'trade'],
  },
  [SolanaProgramType.MangoICO]: {
    name: 'Mango ICO',
    tags: ['mango', 'ico'],
  },
  [SolanaProgramType.MonkeyDaoGovernance]: {
    name: 'Monkey Dao Governance',
    tags: ['mbs', 'governance'],
  },
  [SolanaProgramType.TribecaGovern]: {
    name: 'Tribeca Governance',
    tags: ['tribeca', 'governance'],
  },
  [SolanaProgramType.Memo]: {
    name: 'Memo',
    tags: ['system'],
  },
  [SolanaProgramType.Secp256]: {
    name: 'Secp256',
    tags: ['system'],
  },
  [SolanaProgramType.Snapshot]: {
    name: 'Raydium Snapshot',
    tags: ['trade', 'amm', 'raydium'],
  },
  [SolanaProgramType.Lend]: {
    name: 'Lend',
    tags: ['lend'],
  },
  [SolanaProgramType.Wormhole]: {
    name: 'Wormhole Bridge',
    tags: ['bridge'],
  },
  [SolanaProgramType.Vesting]: {
    name: 'Vesting',
    tags: ['system'],
  },
  [SolanaProgramType.Perp]: {
    name: 'Perp',
    tags: ['trade'],
  },
  [SolanaProgramType.MetaplexVault]: {
    name: 'Metaplex Vault',
    tags: ['nft', 'metaplex'],
  },
  [SolanaProgramType.MetaplexAuction]: {
    name: 'Metaplex Auction',
    tags: ['nft', 'metaplex'],
  },
  [SolanaProgramType.MetaplexManager]: {
    name: 'Metaplex Manager',
    tags: ['nft', 'metaplex'],
  },
  [SolanaProgramType.MetaplexMetadata]: {
    name: 'Metaplex Metadata',
    tags: ['nft', 'metaplex'],
  },
  [SolanaProgramType.MetaplexCandy]: {
    name: 'Metaplex Candy Machine',
    tags: ['nft', 'metaplex'],
  },
  [SolanaProgramType.MetaplexBubblegum]: {
    name: 'Metaplex Bubblegum',
    tags: ['nft', 'metaplex'],
  },
  [SolanaProgramType.SolanartGoNFT]: {
    name: 'Solanart Go',
    tags: ['nft'],
  },
  [SolanaProgramType.PythOracle]: {
    name: 'Pyth Oracle',
    tags: ['oracle'],
  },
  [SolanaProgramType.Switchboard]: {
    name: 'Switchboard',
    tags: ['oracle'],
  },
  [SolanaProgramType.ChainlinkOracle]: {
    name: 'Chainlink Oracle',
    tags: ['oracle'],
  },
  [SolanaProgramType.ChainlinkStore]: {
    name: 'Chainlink Aggregator',
    tags: ['oracle'],
  },
  [SolanaProgramType.AudiusTrackListenCount]: {
    name: 'Audius Track Listen',
    tags: ['nft', 'audio'],
  },
  [SolanaProgramType.AudiusSignerGroup]: {
    name: 'Audius Signer Group',
    tags: ['nft', 'audio'],
  },
  [SolanaProgramType.MangoMarkets]: {
    name: 'Mango Markets',
    tags: ['trade'],
  },
  [SolanaProgramType.OrcaAquafarm]: {
    name: 'Orca Aquafarm',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.OrcaSwap]: {
    name: 'Orca Swap',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.OrcaWhirpool]: {
    name: 'Orca Whirpool',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.TulipLeverageFarming]: {
    name: 'Tulip Leverage Farming',
    tags: ['lend', 'farm'],
  },
  [SolanaProgramType.TulipLending]: {
    name: 'Tulip Lending',
    tags: ['lend', 'farm'],
  },
  [SolanaProgramType.TulipRaydiumVault]: {
    name: 'Tulip Raydium Vault',
    tags: ['lend', 'farm'],
  },
  [SolanaProgramType.TulipSaberVault]: {
    name: 'Tulip Saber Vault',
    tags: ['lend', 'farm'],
  },
  [SolanaProgramType.TulipOrcaVault]: {
    name: 'Tulip Orca Vault',
    tags: ['lend', 'farm'],
  },
  [SolanaProgramType.MagicEdenNFT]: {
    name: 'Magic Eden',
    tags: ['nft'],
  },
  [SolanaProgramType.SolanartNFT]: {
    name: 'Solanart',
    tags: ['nft'],
  },
  [SolanaProgramType.DigitalEyesNFT]: {
    name: 'Digital Eyes',
    tags: ['nft'],
  },
  [SolanaProgramType.AlphaArtNFT]: {
    name: 'Alpha Art',
    tags: ['nft'],
  },
  [SolanaProgramType.SolSeaNFT]: {
    name: 'Sol Sea',
    tags: ['nft'],
  },
  [SolanaProgramType.SaberSnapshots]: {
    name: 'Saber Snapshots',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberMerkleDistributor]: {
    name: 'Saber Merkle Distributor',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberPools]: {
    name: 'Saber Pools',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberSwap]: {
    name: 'Saber Swap',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberAddDecimals]: {
    name: 'Saber Add Decimals',
    tags: ['trade', 'amm', 'system'],
  },
  [SolanaProgramType.SaberRouter]: {
    name: 'Saber Router',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberLockup]: {
    name: 'Saber Lockup',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberMintProxy]: {
    name: 'Saber Mint Proxy',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.SaberRedeemer]: {
    name: 'Saber Redeemer',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.PortFinance]: {
    name: 'Port Finance',
    tags: ['trade'],
  },
  [SolanaProgramType.ProjectLarix]: {
    name: 'Project Larix',
    tags: ['trade'],
  },
  [SolanaProgramType.StepSwap]: {
    name: 'Step Swap',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.StepCompounder]: {
    name: 'Step Compounder',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.Solend]: {
    name: 'Solend',
    tags: ['solend', 'lend', 'defi'],
  },
  [SolanaProgramType.RaydiumStake]: {
    name: 'Raydium Stake',
    tags: ['trade', 'amm', 'farm', 'raydium'],
  },
  [SolanaProgramType.Raydium]: {
    name: 'Raydium Swap',
    tags: ['trade', 'amm', 'raydium'],
  },
  [SolanaProgramType.RaydiumStable]: {
    name: 'Raydium Stable Swap',
    tags: ['trade', 'amm', 'raydium'],
  },
  [SolanaProgramType.RaydiumIdo]: {
    name: 'Raydium IDO',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.Swap]: {
    name: 'Swap',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.MercurialSwap]: {
    name: 'Mercurial Swap',
    websiteUrl: 'https://www.mercurial.finance/',
    twitter: 'MercurialFi',
    discord: 'WwFwsVtvpH',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.NamesService]: {
    name: 'Names',
    tags: ['system'],
  },
  [SolanaProgramType.SolanaPool]: {
    name: 'Solana Pool',
    tags: ['trade', 'amm', 'system'],
  },
  [SolanaProgramType.StarAtlasFleet]: {
    name: 'Star Atlas Fleet',
    websiteUrl: 'https://play.staratlas.com/',
    twitter: 'staratlas',
    discord: 'staratlas',
    tags: ['game', 'nft'],
  },
  [SolanaProgramType.StarAtlasFaction]: {
    name: 'Star Atlas Faction',
    tags: ['game', 'nft'],
  },
  [SolanaProgramType.StarAtlasResourceSnapshot]: {
    name: 'Star Atlas Resource Snapshot',
    tags: ['game', 'nft'],
  },
  [SolanaProgramType.GenopetsHabitat]: {
    name: 'Genopets Habitat',
    tags: ['game', 'nft'],
  },
  [SolanaProgramType.StepnDex]: {
    name: 'StepN Dex - Dooar',
    tags: ['game', 'amm'],
  },
  [SolanaProgramType.ZetaMarkets]: {
    name: 'Zeta Markets',
    tags: ['trade'],
  },
  [SolanaProgramType.QuarryMine]: {
    name: 'Quarry Mine',
    tags: ['farm'],
  },
  [SolanaProgramType.QuarryMergeMine]: {
    name: 'Quarry Merge Mine',
    tags: ['farm'],
  },
  [SolanaProgramType.QuarryMintWrapper]: {
    name: 'Quarry Mint Wrapper',
    tags: ['farm'],
  },
  [SolanaProgramType.QuarryRedeemer]: {
    name: 'Quarry Redeemer',
    tags: ['farm'],
  },
  [SolanaProgramType.QuarryRegistry]: {
    name: 'Quarry Registry',
    tags: ['farm'],
  },
  [SolanaProgramType.QuarryGauge]: {
    name: 'Quarry Gauge',
    tags: ['farm'],
  },
  [SolanaProgramType.SwimSwap]: {
    name: 'Swim Swap',
    websiteUrl: 'https://swim.io/',
    discord: 'SwimProtocol',
    twitter: 'SwimProtocol',
    tags: ['farm', 'amm'],
  },
  [SolanaProgramType.Sencha]: {
    name: 'Sencha Dex',
    websiteUrl: 'https://swim.io/',
    discord: 'aF9USSwG33',
    twitter: 'SenchaDEX',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.GokiWallet]: {
    name: 'Goki Wallet',
    tags: ['wallet'],
  },
  [SolanaProgramType.GokiSigner]: {
    name: 'Goki Signer',
    tags: ['wallet'],
  },
  [SolanaProgramType.SquadsMultisig]: {
    name: 'Squads Multisig',
    tags: ['squads', 'governance', 'multisig'],
  },
  [SolanaProgramType.Uxd]: {
    name: 'UXD',
    tags: ['stablecoin'],
  },
  [SolanaProgramType.SagaPass]: {
    name: 'Saga Pass',
    tags: ['solana', 'saga'],
  },
  [SolanaProgramType.GooseFx]: {
    name: 'GooseFx',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.MarinadeFinance]: {
    name: 'Marinade Finance',
    tags: ['stake', 'sol'],
  },
  [SolanaProgramType.AldrinAmmV1]: {
    name: 'Aldrin V1',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.AldrinAmmV2]: {
    name: 'Aldrin V2',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.SwimSwap]: {
    name: 'Swim Swap',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.CropperSwap]: {
    name: 'Cropper Swap',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.ParrotSwap]: {
    name: 'Parrot Swap',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.LifinitySwap]: {
    name: 'Lifinity Swap',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.Saros]: {
    name: 'Saros Swap',
    tags: ['amm', 'trade'],
  },
  [SolanaProgramType.SarosFarm]: {
    name: 'Saros Farm',
    tags: ['amm', 'trade', 'farm'],
  },
  [SolanaProgramType.DrachmaSwap]: {
    name: 'Drachma Swap',
    tags: ['amm', 'trade', 'scam'],
  },
  [SolanaProgramType.Nazare]: {
    name: 'Hedge - Nazare',
    tags: ['vault', 'clmm', 'hedge'],
  },
  [SolanaProgramType.Kamino]: {
    name: 'Hubble - Kamino',
    tags: ['vault', 'clmm', 'hubble'],
  },
  [SolanaProgramType.SolendMultisig]: {
    name: 'Solend Multisig',
    tags: ['solend', 'multisig'],
  },
  [SolanaProgramType.SolendMultisig]: {
    name: 'Solend Rewards',
    tags: ['solend', 'farm'],
  },
  [SolanaProgramType.AldrinAmmV1]: {
    name: 'Aldrin AMM',
    tags: ['trade', 'amm'],
  },
  [SolanaProgramType.JupiterAggregator]: {
    name: 'Jupiter Aggregator',
    tags: ['trade', 'amm', 'aggregator'],
  },
  [SolanaProgramType.Hedge]: {
    name: 'Hedge',
    websiteUrl: 'https://www.hedge.so/',
    tags: ['lend'],
  },
  [SolanaProgramType.Sharky]: {
    name: 'Sharky',
    websiteUrl: 'https://sharky.fi/',
    tags: ['lend', 'nft', 'defi'],
  },
};
