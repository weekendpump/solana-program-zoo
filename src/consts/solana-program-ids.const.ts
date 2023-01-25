import { IMap, LazySolanaKey, SolanaKey } from '@wknd/solana-utils';
import { SolanaProgramType } from '../enums/solana-program-type.enum';
import { ISolanaProgramEnvironmentIds } from '../interfaces';

export function fillProgramEnvironments(programId: SolanaKey): ISolanaProgramEnvironmentIds {
  return {
    'mainnet-beta': LazySolanaKey.from(programId, true),
    testnet: LazySolanaKey.from(programId, true),
    devnet: LazySolanaKey.from(programId, true),
    localnet: LazySolanaKey.from(programId, true),
  };
}

/** SOLANA_PROGRAM_IDS[programType][programVersion] */
export const SOLANA_PROGRAM_IDS: IMap<IMap<ISolanaProgramEnvironmentIds>> = {
  [SolanaProgramType.Serum]: {
    v3: fillProgramEnvironments('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
    v2: fillProgramEnvironments('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o'),
    v1: fillProgramEnvironments('4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn'),
  },
  [SolanaProgramType.SerumCommunity]: {
    v1: fillProgramEnvironments('srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX'),
  },
  [SolanaProgramType.SerumSwap]: {
    v1: fillProgramEnvironments('22Y43yTVxuUkoRKdm9thyRhQ3SdgQS7c7kB6UNCiaczD'),
  },
  [SolanaProgramType.SplGovernance]: {
    v1: fillProgramEnvironments('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw'),
  },
  [SolanaProgramType.SplGovernanceChat]: {
    v1: fillProgramEnvironments('gCHAtYKrUUktTVzE4hEnZdLV4LXrdBf6Hh9qMaJALET'),
  },
  [SolanaProgramType.SplStakePool]: {
    v1: fillProgramEnvironments('SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy'),
  },
  [SolanaProgramType.SplToken2022]: {
    v1: fillProgramEnvironments('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'),
  },
  [SolanaProgramType.SplAccountCompression]: {
    v1: fillProgramEnvironments('cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'),
  },

  [SolanaProgramType.ParrotSwap]: {
    v1: fillProgramEnvironments('PSwapMdSai8tjrEXcxFeQth87xC4rRsa4VA5mhGhXkP'),
  },
  [SolanaProgramType.SerumMultisig]: {
    v1: fillProgramEnvironments('msigmtwzgXJHj2ext4XJjCDmpbcMuufFb5cHuwg6Xdt'),
  },
  [SolanaProgramType.SerumAssertOwner]: {
    v1: fillProgramEnvironments('4MNPdKu9wFMvEeZBMt3Eipfs5ovVWTJb31pEXDJAAxX5'),
  },
  [SolanaProgramType.SerumAssertOwnerPhantom]: {
    v1: fillProgramEnvironments('DeJBGdMFa1uynnnKiwrVioatTuHmNLpyFKnmB5kaFdzQ'),
  },
  [SolanaProgramType.SerumRemote]: {
    v1: fillProgramEnvironments('8TJjyzq3iXc48MgV6TD5DumKKwfWKU14Jr9pwgnAbpzs'),
  },
  [SolanaProgramType.System]: {
    v1: fillProgramEnvironments('11111111111111111111111111111111'),
  },
  [SolanaProgramType.Config]: {
    v1: fillProgramEnvironments('Config1111111111111111111111111111111111111'),
  },
  [SolanaProgramType.ComputeBudget]: {
    v1: fillProgramEnvironments('ComputeBudget111111111111111111111111111111'),
  },
  [SolanaProgramType.AddressLookupTable]: {
    v1: fillProgramEnvironments('AddressLookupTab1e1111111111111111111111111'),
  },
  [SolanaProgramType.Token]: {
    v1: fillProgramEnvironments('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  },
  [SolanaProgramType.AssociatedToken]: {
    v1: fillProgramEnvironments('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'),
  },
  [SolanaProgramType.SysvarClock]: {
    v1: fillProgramEnvironments('SysvarC1ock11111111111111111111111111111111'),
  },
  [SolanaProgramType.SysvarEpochSchedule]: {
    v1: fillProgramEnvironments('SysvarEpochSchedu1e111111111111111111111111'),
  },
  [SolanaProgramType.SysvarFees]: {
    v1: fillProgramEnvironments('SysvarFees111111111111111111111111111111111'),
  },
  [SolanaProgramType.SysvarRecentBlockhashes]: {
    v1: fillProgramEnvironments('SysvarRecentB1ockHashes11111111111111111111'),
  },
  [SolanaProgramType.SysvarRent]: {
    v1: fillProgramEnvironments('SysvarRent111111111111111111111111111111111'),
  },
  [SolanaProgramType.SysvarRewards]: {
    v1: fillProgramEnvironments('SysvarRewards111111111111111111111111111111'),
  },
  [SolanaProgramType.SysvarSlotHashes]: {
    v1: fillProgramEnvironments('SysvarS1otHashes111111111111111111111111111'),
  },
  [SolanaProgramType.SysvarSlotHistory]: {
    v1: fillProgramEnvironments('SysvarS1otHistory11111111111111111111111111'),
  },
  [SolanaProgramType.SysvarStakeHistory]: {
    v1: fillProgramEnvironments('SysvarStakeHistory1111111111111111111111111'),
  },
  [SolanaProgramType.SysvarInstructions]: {
    v1: fillProgramEnvironments('Sysvar1nstructions1111111111111111111111111'),
  },
  [SolanaProgramType.SolanaStake]: {
    v1: fillProgramEnvironments('Stake11111111111111111111111111111111111111'),
  },
  [SolanaProgramType.Snapshot]: {
    v1: fillProgramEnvironments('4kCccBVdQpsonm2jL2TRV1noMdarsWR2mhwwkxUTqW3W'),
  },
  [SolanaProgramType.Lend]: {
    v1: fillProgramEnvironments('LendZqTs7gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi'),
  },
  [SolanaProgramType.Wormhole]: {
    v3: fillProgramEnvironments('wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb'),
    v2: fillProgramEnvironments('worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth'),
    v1: fillProgramEnvironments('WormT3McKhFJ2RkiGpdw9GKvNCrB2aB54gb2uV9MfQC'),
  },
  [SolanaProgramType.Vesting]: {
    v1: fillProgramEnvironments('CChTq6PthWU82YZkbveA3WDf7s97BWhBK4Vx9bmsT743'),
  },
  [SolanaProgramType.Perp]: {
    v1: fillProgramEnvironments('perpke6JybKfRDitCmnazpCrGN5JRApxxukhA9Js6E6'),
  },
  [SolanaProgramType.MetaplexVault]: {
    v1: fillProgramEnvironments('vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn'),
  },
  [SolanaProgramType.MetaplexAuction]: {
    v1: fillProgramEnvironments('auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8'),
  },
  [SolanaProgramType.MetaplexManager]: {
    v1: fillProgramEnvironments('p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98'),
  },
  [SolanaProgramType.MetaplexMetadata]: {
    v1: fillProgramEnvironments('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
  },
  [SolanaProgramType.MetaplexCandy]: {
    v2: fillProgramEnvironments('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'),
    v1: fillProgramEnvironments('cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ'),
  },
  [SolanaProgramType.BpfUpgradeLoader]: {
    v1: fillProgramEnvironments('BPFLoaderUpgradeab1e11111111111111111111111'),
  },
  [SolanaProgramType.Vote]: {
    v1: fillProgramEnvironments('Vote111111111111111111111111111111111111111'),
  },
  [SolanaProgramType.Memo]: {
    v2: fillProgramEnvironments('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    v1: fillProgramEnvironments('Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'),
  },
  [SolanaProgramType.PythOracle]: {
    v1: {
      'mainnet-beta': 'FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH',
      devnet: 'gSbePebfvPy7tRqimPoVecS2UsBvYv46ynrzWocc92s',
      testnet: '8tfDNiaEyrV6Q1U4DEXrEigs9DoDtkugzFbybENEbCDz',
    },
  },
  [SolanaProgramType.PythStaking]: {
    v1: fillProgramEnvironments('sta99txADjRfwHQQMNckb8vUN4jcAAhN2HBMTR2Ah6d'),
  },
  [SolanaProgramType.PythGovernance]: {
    v1: fillProgramEnvironments('GovFUVGZWWwyoLq8rhnoVWknRFkhDSbQiSoREJ5LiZCV'),
  },
  [SolanaProgramType.Secp256]: {
    v1: fillProgramEnvironments('KeccakSecp256k11111111111111111111111111111'),
  },
  [SolanaProgramType.AudiusTrackListenCount]: {
    v1: fillProgramEnvironments('7K3UpbZViPnQDLn2DAM853B9J5GBxd1L1rLHy4KqSmWG'),
  },
  [SolanaProgramType.AudiusSignerGroup]: {
    v1: fillProgramEnvironments('FbfwE8ZmVdwUbbEXdq4ofhuUEiAxeSk5kaoYrJJekpnZ'),
  },
  [SolanaProgramType.AudiusMaybe]: {
    v1: fillProgramEnvironments('7K3UpbZViPnQDLn2DAM853B9J5GBxd1L1rLHy4KqSmWG'),
  },
  [SolanaProgramType.MangoMarkets]: {
    v3: fillProgramEnvironments('mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68'),
    v2: fillProgramEnvironments('5fNfvyp5czQVX77yoACa3JJVEhdRaWjPuazuWgjhTqEH'),
    v1: fillProgramEnvironments('JD3bq9hGdy38PuWQ4h2YJpELmHVGPPfFSuFkpzAd9zfu'),
  },
  [SolanaProgramType.MangoRiskCheck]: {
    v3: fillProgramEnvironments('94oHQMrCECP266YUoQmDvgVwafZApP9KAseMyNtjAPP7'),
  },
  [SolanaProgramType.MangoICO]: {
    v1: fillProgramEnvironments('7sPptkymzvayoSbLXzBsXEF8TSf3typNnAWkrKrDizNb'),
  },
  [SolanaProgramType.MangoGovernance]: {
    v1: fillProgramEnvironments('GqTPL6qRf5aUuqscLh8Rg2HTxPUXfhhAXDptTLhp1t2J'),
  },
  [SolanaProgramType.MangoReimbursement]: {
    v1: fillProgramEnvironments('m3roABq4Ta3sGyFRLdY4LH1KN16zBtg586gJ3UxoBzb'),
  },
  [SolanaProgramType.MonkeyDaoGovernance]: {
    v1: fillProgramEnvironments('GMnke6kxYvqoAXgbFGnu84QzvNHoqqTnijWSXYYTFQbB'),
  },
  [SolanaProgramType.OrcaAquafarm]: {
    v1: fillProgramEnvironments('82yxjeMsvaURa4MbZZ7WZZHfobirZYkH1zF8fmeGtyaQ'),
  },
  [SolanaProgramType.OrcaSwap]: {
    v2: fillProgramEnvironments('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP'),
    v1: fillProgramEnvironments('DjVE6JNiYqPL2QXyCUUh8rNjHrbz9hXHNYt99MQ59qw1'),
  },
  [SolanaProgramType.OrcaWhirpool]: {
    v1: fillProgramEnvironments('whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc'),
  },
  [SolanaProgramType.LifinitySwap]: {
    v1: fillProgramEnvironments('EewxydAPCCVuNEyrVN68PuSYdQ7wKn27V9Gjeoi8dy3S'),
  },
  [SolanaProgramType.TulipLeverageFarming]: {
    v1: fillProgramEnvironments('Bt2WPMmbwHPk36i4CRucNDyLcmoGdC7xEdrVuxgJaNE6'),
  },
  [SolanaProgramType.TulipLending]: {
    v1: fillProgramEnvironments('4bcFeLv4nydFrsZqV5CgwCVrPhkQKsXtzfy2KyMz7ozM'),
  },
  [SolanaProgramType.TulipRaydiumVault]: {
    v2: fillProgramEnvironments('TLPv2tuSVvn3fSk8RgW3yPddkp5oFivzZV3rA9hQxtX'),
    v1: fillProgramEnvironments('7vxeyaXGLqcp66fFShqUdHxdacp4k4kwUpRSSeoZLCZ4'),
  },
  [SolanaProgramType.TulipSaberVault]: {
    v1: fillProgramEnvironments('EzSXQ2BXf8m4y4jcQQGeZ6nnwXB3ARXP3YQ5SwjKLj82'),
  },
  [SolanaProgramType.TulipOrcaVault]: {
    v1: fillProgramEnvironments('FoNqK2xudK7TfKjPFxpzAcTaU2Wwyt81znT4RjJBLFQp'),
  },
  [SolanaProgramType.MagicEdenNFT]: {
    v2: fillProgramEnvironments('M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K'),
    v1: fillProgramEnvironments('MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8'),
  },
  [SolanaProgramType.SolanartNFT]: {
    v1: fillProgramEnvironments('CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz'),
  },
  [SolanaProgramType.SolanartGoNFT]: {
    v1: fillProgramEnvironments('5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ'),
  },
  [SolanaProgramType.DigitalEyesNFT]: {
    v1: fillProgramEnvironments('A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7'),
  },
  [SolanaProgramType.AlphaArtNFT]: {
    v1: fillProgramEnvironments('HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B'),
  },
  [SolanaProgramType.SolSeaNFT]: {
    v1: fillProgramEnvironments('617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU'),
  },
  [SolanaProgramType.Nirvana]: {
    v1: fillProgramEnvironments('nirkXSE28jCQoK8SmKWqxXz3L9vbSRGKS24iYJj8Aeo'),
  },
  [SolanaProgramType.CyclosCore]: {
    v1: fillProgramEnvironments('cysPXAjehMpVKUapzbMCCnpFxUFFryEWEaLgnb9NrR8'),
  },
  [SolanaProgramType.Unilock]: {
    v1: fillProgramEnvironments('6KKcrfEXa6o7jZRGeB2kRiJbCnVZcyPT3QHEdK93qRv1'),
  },
  [SolanaProgramType.SaberSnapshots]: {
    v1: fillProgramEnvironments('StakeSSzfxn391k3LvdKbZP5WVwWd6AsY1DNiXHjQfK'),
  },
  [SolanaProgramType.SaberMerkleDistributor]: {
    v1: fillProgramEnvironments('MRKGLMizK9XSTaD1d1jbVkdHZbQVCSnPpYiTw9aKQv8'),
  },
  [SolanaProgramType.SaberPools]: {
    v1: fillProgramEnvironments('SMANK4F5osjfVpKFH5LPzE6HPpbzSPu5iHPBhuor5xU'),
  },
  [SolanaProgramType.SaberSwap]: {
    v1: fillProgramEnvironments('SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ'),
  },
  [SolanaProgramType.SaberAddDecimals]: {
    v1: fillProgramEnvironments('DecZY86MU5Gj7kppfUCEmd4LbXXuyZH1yHaP2NTqdiZB'),
  },
  [SolanaProgramType.SaberRouter]: {
    v1: fillProgramEnvironments('Crt7UoUR6QgrFrN7j8rmSQpUTNWNSitSwWvsWGf1qZ5t'),
  },
  [SolanaProgramType.SaberLockup]: {
    v1: fillProgramEnvironments('LockKXdYQVMbhhckwH3BxoYJ9FYatcZjwNGEuCwY33Q'),
  },
  [SolanaProgramType.SaberMintProxy]: {
    v1: fillProgramEnvironments('UBEBk5idELqykEEaycYtQ7iBVrCg6NmvFSzMpdr22mL'),
  },
  [SolanaProgramType.SaberRedeemer]: {
    v1: fillProgramEnvironments('RDM23yr8pr1kEAmhnFpaabPny6C9UVcEcok3Py5v86X'),
  },
  [SolanaProgramType.Saros]: {
    v1: fillProgramEnvironments('SSwapUtytfBdBn1b9NUGG6foMVPtcWgpRU32HToDUZr'),
  },
  [SolanaProgramType.SarosFarm]: {
    v1: fillProgramEnvironments('SFarmWM5wLFNEw1q5ofqL7CrwBMwdcqQgK6oQuoBGZJ'),
  },
  [SolanaProgramType.PortFinance]: {
    v1: fillProgramEnvironments('Port7uDYB3wk6GJAw4KT1WpTeMtSu9bTcChBHkX2LfR'),
  },
  [SolanaProgramType.ProjectLarix]: {
    v1: fillProgramEnvironments('7Zb1bGi32pfsrBkzWdqd4dFhUXwp5Nybr1zuaEwN34hy'),
  },
  [SolanaProgramType.StepSwap]: {
    v1: fillProgramEnvironments('SSwpMgqNDsyV7mAgN9ady4bDVu5ySjmmXejXvy2vLt1'),
  },
  [SolanaProgramType.StepCompounder]: {
    v1: fillProgramEnvironments('ScMpNpEQatFrV1JBQySx6h1cdMHhuvBBPNLDhHojtno'),
  },
  [SolanaProgramType.Solend]: {
    v1: fillProgramEnvironments('So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo'),
  },
  [SolanaProgramType.SolendRewards]: {
    v1: fillProgramEnvironments('mrksLcZ6rMs9xkmJgw6oKiR3GECw44Gb5NeDqu64kiw'),
  },
  [SolanaProgramType.SolendMultisig]: {
    v1: fillProgramEnvironments('BLg8mSPvEjzSkbGdE9mRJfTSm7EauYgzFsWhERKn1gRm'),
  },
  [SolanaProgramType.CropperSwap]: {
    v1: fillProgramEnvironments('CTMAxxk34HjKWxQ3QLZK1HpaLXmBveao3ESePXbiyfzh'),
  },
  [SolanaProgramType.DrachmaSwap]: {
    v1: fillProgramEnvironments('DrBYESnnfEqqnfJu7Mv5NHsY3VrooNSxuDxkb9WSmvZS'),
  },
  [SolanaProgramType.StepnDex]: {
    v1: fillProgramEnvironments('Dooar9JkhdZ7J3LHN3A7YCuoGRUggXhQaG4kijfLGU2j'),
  },
  [SolanaProgramType.Synthetify]: {
    v1: fillProgramEnvironments('5TeGDBaMNPc2uxvx6YLDycsoxFnBuqierPt3a8Bk4xFX'),
  },
  [SolanaProgramType.RaydiumStake]: {
    v5: fillProgramEnvironments('9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z'),
    v4: fillProgramEnvironments('CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T'),
    v3: fillProgramEnvironments('EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q'),
  },
  [SolanaProgramType.Raydium]: {
    v4: fillProgramEnvironments('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8'),
    v3: fillProgramEnvironments('27haf8L6oxUeXrHrgEgsexjSY5hbVUWEmvv9Nyxg8vQv'),
    v2: fillProgramEnvironments('RVKd61ztZW9GUwhRbbLoYVRE5Xf1B2tVscKqwZqXgEr'),
  },
  [SolanaProgramType.RaydiumStable]: {
    v1: fillProgramEnvironments('5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h'),
  },
  [SolanaProgramType.RaydiumRoute]: {
    v1: fillProgramEnvironments('routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS'),
  },
  [SolanaProgramType.RaydiumIdo]: {
    v4: fillProgramEnvironments('9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC'),
    v2: fillProgramEnvironments('CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH'),
    v1: fillProgramEnvironments('6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF'),
  },
  [SolanaProgramType.RaydiumClamm]: {
    v1: fillProgramEnvironments('CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK'),
  },
  [SolanaProgramType.OxbullSol]: {
    v1: fillProgramEnvironments('8DSsC7VeihEk8YPr52tm1uiUEAQ3CZjo2zaiSnVZTXxr'),
  },
  [SolanaProgramType.Swap]: {
    v2: fillProgramEnvironments('SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8'),
  },
  [SolanaProgramType.MercurialSwap]: {
    v1: fillProgramEnvironments('MERLuDFBMmsHnsBPZw2sDQZHvXFMwp8EdjudcU2HKky'),
  },
  [SolanaProgramType.MercurialLocker]: {
    v1: fillProgramEnvironments('LockrzAg7Zg5LhrJP5sszKYCrx5fGrhLdMvU3zhftHp'),
  },
  [SolanaProgramType.MercurialStake]: {
    v1: fillProgramEnvironments('StakhsBRrXhafhcBUpMmQuippk1JrQuAk6GXuknBCxW'),
  },
  [SolanaProgramType.MercurialFarm]: {
    v1: fillProgramEnvironments('FarmuwXPWXvefWUeqFAa5w6rifLkq5X6E8bimYvrhCB1'),
  },
  [SolanaProgramType.MercurialMeteora]: {
    v1: fillProgramEnvironments('24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi'),
  },
  [SolanaProgramType.MercurialMeteoraPools]: {
    v1: fillProgramEnvironments('Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB'),
  },
  [SolanaProgramType.MercurialDynamicAmm]: {
    v1: fillProgramEnvironments('5B23C376Kwtd1vzb5LCJHiHLPnoWSnnx661hhGGDEv8y'),
  },
  [SolanaProgramType.Koba]: {
    v1: fillProgramEnvironments('VEXAaPMWYQByEfx1QoYwwfSKTzk4E9mpcLmAPmNbdbu'),
  },
  [SolanaProgramType.NamesService]: {
    v1: fillProgramEnvironments('namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX'),
  },
  [SolanaProgramType.SolanaPool]: {
    v1: {
      'mainnet-beta': LazySolanaKey.from('9qvG1zUp8xF1Bi4m6UdRNby1BAAuaDrUxSpv4CmRRMjL', true),
      testnet: LazySolanaKey.from('2n2dsFSgmPcZ8jkmBZLGUM2nzuFqcBGQ3JEEj6RJJcEg', true),
      devnet: LazySolanaKey.from('BSfTAcBdqmvX5iE2PW88WFNNp2DHhLUaBKk5WrnxVkcJ', true),
      localnet: LazySolanaKey.from('a4BEJqpcypLP3LCuHYz3iPF4YxiKfu1vuEKTegoKwWJ', true),
    },
  },
  [SolanaProgramType.StarAtlasFleet]: {
    v1: fillProgramEnvironments('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW'),
  },
  [SolanaProgramType.StarAtlasFaction]: {
    v1: fillProgramEnvironments('FACTNmq2FhA2QNTnGM2aWJH3i7zT3cND5CgvjYTjyVYe'),
  },
  [SolanaProgramType.StarAtlasMarket]: {
    v1: fillProgramEnvironments('traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg'),
  },
  [SolanaProgramType.StarAtlasResourceSnapshot]: {
    v1: fillProgramEnvironments('gdrpGjVffourzkdDRrQmySw4aTHr8a3xmQzzxSwFD1a'),
  },
  [SolanaProgramType.GenopetsHabitat]: {
    v1: fillProgramEnvironments('HABitaBFxaU7wtLuSX6zdtDfz4uvoJ1NUvhHoeDsyrwn'),
  },
  [SolanaProgramType.ZetaMarkets]: {
    v1: fillProgramEnvironments('ZETAxsqBRek56DhiGXrn75yj2NHU3aYUnxvHXpkf3aD'),
  },
  [SolanaProgramType.ZetaFlex]: {
    v1: fillProgramEnvironments('zFLEX6CVSPJgCwnYPYWSJFzYAC3RbP7vSoc75R88P6C'),
  },
  [SolanaProgramType.ZetaDex]: {
    v1: fillProgramEnvironments('zDEXqXEG7gAyxb1Kg9mK5fPnUdENCGKzWrM21RMdWRq'),
  },
  [SolanaProgramType.Switchboard]: {
    v2: fillProgramEnvironments('SW1TCH7qEPTdLsDHRgPuMQjbQxKdH2aBStViMFnt64f'),
    v1: fillProgramEnvironments('DtmE9D2CSB4L5D6A15mraeEjrGMm6auWVzgaD8hK2tZM'),
  },
  [SolanaProgramType.QuarryMine]: {
    v1: fillProgramEnvironments('QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB'),
  },
  [SolanaProgramType.QuarryMergeMine]: {
    v1: fillProgramEnvironments('QMMD16kjauP5knBwxNUJRZ1Z5o3deBuFrqVjBVmmqto'),
  },
  [SolanaProgramType.QuarryMintWrapper]: {
    v1: fillProgramEnvironments('QMWoBmAyJLAsA1Lh9ugMTw2gciTihncciphzdNzdZYV'),
  },
  [SolanaProgramType.QuarryRedeemer]: {
    v1: fillProgramEnvironments('QRDxhMw1P2NEfiw5mYXG79bwfgHTdasY2xNP76XSea9'),
  },
  [SolanaProgramType.QuarryRegistry]: {
    v1: fillProgramEnvironments('QREGBnEj9Sa5uR91AV8u3FxThgP5ZCvdZUW2bHAkfNc'),
  },
  [SolanaProgramType.QuarryGauge]: {
    v1: fillProgramEnvironments('GaugesLJrnVjNNWLReiw3Q7xQhycSBRgeHGTMDUaX231'),
  },
  [SolanaProgramType.SwimSwap]: {
    v1: fillProgramEnvironments('SWiMDJYFUGj6cPrQ6QYYYWZtvXQdRChSVAygDZDsCHC'),
  },
  [SolanaProgramType.Hedge]: {
    v1: fillProgramEnvironments('HedgeEohwU6RqokrvPU4Hb6XKPub8NuKbnPmY7FoMMtN'),
  },
  [SolanaProgramType.Hubble]: {
    v1: fillProgramEnvironments('HubbLeXBb7qyLHt3x7gvYaRrxQmmgExb7fCJgDqFuB6T'),
  },
  [SolanaProgramType.SnowflakeMultisig]: {
    v1: fillProgramEnvironments('HAD4YK6z3mFEYaFd82Ln2aVTUp3rt1ifXBHbFLfoot83'),
  },
  [SolanaProgramType.Kamino]: {
    v1: fillProgramEnvironments('6LtLpnUFNByNXLyCoK9wA2MykKAmQNZKBdY8s47dehDc'),
  },
  [SolanaProgramType.Nazare]: {
    v1: fillProgramEnvironments('NAZAREQQuCnkV8CpkGZaoB6ccmvikM8uRr4GKPWwmPT'),
    v0: fillProgramEnvironments('Nazareen6k6rAFXKKZrBj5PiehJsohQ8gwGFHJT77sa'),
  },
  [SolanaProgramType.Francium]: {
    v1: fillProgramEnvironments('FC81tbGt6JWRXidaWYFXxGnTk4VgobhJHATvTRVMqgWj'),
  },
  [SolanaProgramType.Atrix]: {
    v1: fillProgramEnvironments('BLDDrex4ZSWBgPYaaH6CQCzkJXWfzCiiur9cSFJT8t3x'),
  },
  [SolanaProgramType.AtrixPool]: {
    v1: fillProgramEnvironments('HvwYjjzPbXWpykgVZhqvvfeeaSraQVnTiQibofaFw9M7'),
  },
  [SolanaProgramType.Sencha]: {
    v1: fillProgramEnvironments('SCHAtsf8mbjyjiv4LkhLKutTf6JnZAbdJKFkXQNMFHZ'),
  },
  [SolanaProgramType.GokiWallet]: {
    v1: fillProgramEnvironments('GokivDYuQXPZCWRkwMhdH2h91KpDQXBEmpgBgs55bnpH'),
  },
  [SolanaProgramType.GokiSigner]: {
    v1: fillProgramEnvironments('NFTUJzSHuUCsMMqMRJpB7PmbsaU7Wm51acdPk2FXMLn'),
  },
  [SolanaProgramType.CrateRedeem]: {
    v1: fillProgramEnvironments('1NKyU3qShZC3oJgvCCftAHDi5TFxcJwfyUz2FeZsiwE'),
  },
  [SolanaProgramType.CrateToken]: {
    v1: fillProgramEnvironments('CRATwLpu6YZEeiVq9ajjxs61wPQ9f29s1UoQR9siJCRs'),
  },
  [SolanaProgramType.CrateYi]: {
    v1: fillProgramEnvironments('YiiTopEnX2vyoWdXuG45ovDFYZars4XZ4w6td6RVTFm'),
  },
  [SolanaProgramType.CremaFinance]: {
    v1: fillProgramEnvironments('6MLxLqiXaaSUpkgMnWDTuejNZEz3kE7k2woyHGVFw319'),
  },
  [SolanaProgramType.TribecaPermalock]: {
    v1: fillProgramEnvironments('PLKZAXAYmZSfQv61tL2XALX4c14fcEhJj2CJhU1KcKd'),
  },
  [SolanaProgramType.TribecaSaveToken]: {
    v1: fillProgramEnvironments('SAVEd9pHcncknnMWdP8RSbhDUhw3nrzwmZ6F6RAUiio'),
  },
  [SolanaProgramType.TribecaGovern]: {
    v1: fillProgramEnvironments('Govz1VyoyLD5BL6CSCxUJLVLsQHRwjfFj1prNsdNg5Jw'),
  },
  [SolanaProgramType.TribecaLockedVoter]: {
    v1: fillProgramEnvironments('LocktDzaV1W2Bm9DeZeiyz4J9zs4fRqNiYqQyracRXw'),
  },
  [SolanaProgramType.ArrowSunny]: {
    v1: fillProgramEnvironments('ARoWLTBWoWrKMvxEiaE2EH9DrWyV7mLpKywGDWxBGeq9'),
  },
  [SolanaProgramType.Venko]: {
    v1: fillProgramEnvironments('AnatoLyYrd5iaAe36Lvq2oS4nuVDnRAb3KBVCARt4XiZ'),
  },
  [SolanaProgramType.CashioBankman]: {
    v1: fillProgramEnvironments('BANKhiCgEYd7QmcWwPLkqvTuuLN6qEwXDZgTe6HEbwv1'),
  },
  [SolanaProgramType.CashioBrr]: {
    v1: fillProgramEnvironments('BRRRot6ig147TBU6EGp7TMesmQrwu729CbG6qu2ZUHWm'),
  },
  [SolanaProgramType.AldrinAmmV1]: {
    v1: fillProgramEnvironments('AMM55ShdkoGRB5jVYPjWziwk8m5MpwyDgsMWHaMSQWH6'),
  },
  [SolanaProgramType.AldrinAmmV2]: {
    v1: fillProgramEnvironments('CURVGoZn8zycx6FXwwevgBTB2gVvdbGTEpvMJDbgs2t4'),
  },
  [SolanaProgramType.JupiterAggregator]: {
    v4: fillProgramEnvironments('JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB'),
    v3: fillProgramEnvironments('JUP3c2Uh3WA4Ng34tw6kPd2G4C5BB21Xo36Je1s32Ph'),
    v2: fillProgramEnvironments('JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo'),
    v1: fillProgramEnvironments('JUP6i4ozu5ydDCnLiMogSckDPpbtr7BJ4FtzYWkb5Rk'),
  },
  [SolanaProgramType.JupiterLimit]: {
    v1: fillProgramEnvironments('jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu'),
  },
  [SolanaProgramType.JupiterReferral]: {
    v1: fillProgramEnvironments('REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3'),
  },
  [SolanaProgramType.PrismAggregator]: {
    v1: fillProgramEnvironments('AGGZ2djPDEvrbgiBTV3P8UoB8Zf1kGawkWd2eu553o44'),
  },
  [SolanaProgramType.PsyOptions]: {
    v1: fillProgramEnvironments('R2y9ip6mxmWUj4pt54jP2hz2dgvMozy9VTSwMWE7evs'),
  },
  [SolanaProgramType.SequenceEnforcer]: {
    v1: fillProgramEnvironments('GDDMwNyyx8uB6zrqwBFHjLLG3TBYk2F8Az4yrQC5RzMp'),
  },
  [SolanaProgramType.Jet]: {
    v1: fillProgramEnvironments('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
  },
  [SolanaProgramType.JetAuth]: {
    v1: fillProgramEnvironments('JPALXR88jy2fG3miuu4n3o8Jef4K2Cgc3Uypr3Y8RNX'),
  },
  [SolanaProgramType.JetRewards]: {
    v1: fillProgramEnvironments('JET777rQuPU8BatFbhp6irc1NAbozxTheBqNo25eLQP'),
  },
  [SolanaProgramType.JetStaking]: {
    v1: fillProgramEnvironments('JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n'),
  },
  [SolanaProgramType.MarinadeFinance]: {
    v1: fillProgramEnvironments('MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD'),
  },
  [SolanaProgramType.ChainlinkStore]: {
    v1: fillProgramEnvironments('HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny'),
  },
  [SolanaProgramType.ChainlinkOracle]: {
    v1: fillProgramEnvironments('cjg3oHmg9uuPsP8D6g29NWvhySJkdYdAo9D25PRbKXJ'),
  },
  [SolanaProgramType.SolIdo]: {
    v1: fillProgramEnvironments('CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi'),
  },
  [SolanaProgramType.Acumen]: {
    v1: fillProgramEnvironments('C64kTdg1Hzv5KoQmZrQRcm2Qz7PkxtFBgw7EpFhvYn8W'),
  },
  [SolanaProgramType.BreakSolana]: {
    v1: fillProgramEnvironments('BrEAK7zGZ6dM71zUDACDqJnekihmwF15noTddWTsknjC'),
  },
  [SolanaProgramType.ZeroOne]: {
    v1: fillProgramEnvironments('Zo1ggzTUKMY5bYnDvT5mtVeZxzf2FaLTbKkmvGUhUQk'),
  },
  [SolanaProgramType.MrgnVault]: {
    v1: fillProgramEnvironments('MRGNWSHaWmz3CPFcYt9Fyh8VDcvLJyy2SCURnMco2bC'),
  },
  [SolanaProgramType.AuryStaking]: {
    v1: fillProgramEnvironments('StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x'),
  },
  [SolanaProgramType.DegodsStaking1]: {
    v1: fillProgramEnvironments('FQzYycoqRjmZTgCcTTAkzceH2Ju8nzNLa5d78K3yAhVW'),
  },
  [SolanaProgramType.DegodsStaking2]: {
    v1: fillProgramEnvironments('6VJpeYFy87Wuv4KvwqD5gyFBTkohqZTqs6LgbCJ8tDBA'),
  },
  [SolanaProgramType.SolStake]: {
    v1: fillProgramEnvironments('4N9p69ju8BtQCLZ96DgCQ8cXHgmebiwhHhCyMxVkNU7R'),
  },
  [SolanaProgramType.SolMiner]: {
    v1: fillProgramEnvironments('HLK7CWUzPr5Swg6Guju4tcmvwySEFF4krfaThsZtcxWY'),
  },
  [SolanaProgramType.RaindropsPlayer]: {
    v1: fillProgramEnvironments('p1ay5K7mcAZUkzR1ArMLCCQ6C58ULUt7SUi7puGEWc1'),
  },
  [SolanaProgramType.Katana]: {
    v1: fillProgramEnvironments('1349iiGjWC7ZTbu6otFmJwztms122jEEnShKgpVnNewy'),
  },
  [SolanaProgramType.Coin98Vault]: {
    v1: fillProgramEnvironments('VAU1T98eWi9uxHbED9i6ueoTRLy1dGcNfDBwdCSNQ3e'),
  },
  [SolanaProgramType.Coin98Wallet]: {
    v1: fillProgramEnvironments('7oyG4wSf2kz2CxTqKTf1uhpPqrw9a8Av1w5t8Uj5PfXb'),
  },
  [SolanaProgramType.SagaPass]: {
    v1: fillProgramEnvironments('781wH11JGQgEoBkBzuc8uoQLtp8KxeHk1yZiS1JhFYKy'),
  },
  [SolanaProgramType.Scope]: {
    v1: fillProgramEnvironments('HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ'),
  },
  [SolanaProgramType.Uxd]: {
    v1: fillProgramEnvironments('UXD8m9cvwk4RcSxnX2HZ9VudQCEeDH6fRnB4CAP57Dr'),
  },
  [SolanaProgramType.EscrowRelocker]: {
    v1: fillProgramEnvironments('tovt1VkTE2T4caWoeFP6a2xSFoew5mNpd7FWidyyMuk'),
  },
  [SolanaProgramType.Tokadapt]: {
    v1: fillProgramEnvironments('tokdh9ZbWPxkFzqsKqeAwLDk6J6a8NBZtQanVuuENxa'),
  },
  [SolanaProgramType.GooseFx]: {
    v1: fillProgramEnvironments('7WduLbRfYhTJktjLw5FDEyrqoEv61aTTCuGAetgLjzN5'),
  },
  [SolanaProgramType.MetaplexBubblegum]: {
    v1: fillProgramEnvironments('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'),
  },
  [SolanaProgramType.MetaplexFairLaunch]: {
    v1: fillProgramEnvironments('faircnAB9k59Y4TXmLabBULeuTLgV7TkGMGNkjnA15j'),
  },
  [SolanaProgramType.MetaplexFairLaunch]: {
    v1: fillProgramEnvironments('Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g'),
  },
  [SolanaProgramType.SquadsMultisig]: {
    v1: fillProgramEnvironments('BASEDWVF6xeXTJSrk99cbMCwGFtaUvFLihpg6ki9UWX3'),
  },
  [SolanaProgramType.SquadsMultisig]: {
    v1: fillProgramEnvironments('SMPLKTQhrgo22hFCVq2VGX1KAktTWjeizkhrdB1eauK'),
  },
  [SolanaProgramType.LiquidTokenStaking]: {
    v1: fillProgramEnvironments('LiqtEZFLJyfp59yWVMr97ZcbxVyYumwfJuy765oEEHk'),
  },
  [SolanaProgramType.TextureFlashLoan]: {
    v1: fillProgramEnvironments('F1aShdFVv12jar3oM2fi6SDqbefSnnCVRzaxbPH3you7'),
  },
  [SolanaProgramType.Incinerator]: {
    v1: fillProgramEnvironments('F6fmDVCQfvnEq2KR8hhfZSEczfM9JK9fWbCsYJNbTGn7'),
  },
  [SolanaProgramType.DualFinance]: {
    v1: fillProgramEnvironments('DuALd6fooWzVDkaTsQzDAxPGYCnLrnWamdNNTNxicdX8'),
  },
  [SolanaProgramType.DualStakingOptions]: {
    v1: fillProgramEnvironments('4yx1NJ4Vqf2zT1oVLk4SySBhhDJXmXFt88ncm4gPxtL7'),
  },
  [SolanaProgramType.Drift]: {
    v1: fillProgramEnvironments('dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH'),
  },
  [SolanaProgramType.Sharky]: {
    v1: fillProgramEnvironments('SHARKobtfF1bHhxD2eqftjHBdVSCbKo9JtgK71FhELP'),
  },
  [SolanaProgramType.BonkTld]: {
    v1: fillProgramEnvironments('TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S'),
  },
  [SolanaProgramType.GenesysStaking]: {
    v1: fillProgramEnvironments('GkYcyvjgjf2j3UVukUsjbc37i88FNyNrDqeyBXDDikr1'),
  },
  [SolanaProgramType.HeliumCredits]: {
    v1: fillProgramEnvironments('credacwrBVewZAgCwNgowCSMbCiepuesprUWPBeLTSg'),
  },
  [SolanaProgramType.FriktionVoltCHannel]: {
    v1: fillProgramEnvironments('VoLT1mJz1sbnxwq5Fv2SXjdVDgPXrb9tJyC8WpMDkSp'),
  },
  [SolanaProgramType.ShdwDrive]: {
    v1: fillProgramEnvironments('2e1wdyNhUvE76y6yUCvah2KaviavMJYKoRun8acMRBZZ'),
  },
  [SolanaProgramType.SDriveRegister]: {
    v1: fillProgramEnvironments('ErcW8xB9381TEhDUC1auGPXSpF7qMMhM1khSj4ysZTAW'),
  },
  [SolanaProgramType.HadeSwap]: {
    v1: fillProgramEnvironments('hadeK9DLv9eA7ya5KCTqSvSvRZeJC3JgD5a9Y3CNbvu'),
  },
  [SolanaProgramType.MagicEdenNFTPool]: {
    v1: fillProgramEnvironments('mmm3XBJg5gk8XJxEKBvdgptZz6SgK4tXvn36sodowMc'),
  },
};
