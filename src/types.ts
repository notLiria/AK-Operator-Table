export interface CharacterData {
  maxHp: number;
  atk: number;
  def: number;
  magicResistance: number;
  cost: number;
  blockCnt: number;
  moveSpeed: number;
  attackSpeed: number;
  baseAttackTime: number;
  respawnTime: number;
  hpRecoveryPerSec: number;
  spRecoveryPerSec: number;
  maxDeployCount: number;
  maxDeckStackCnt: number;
  tauntLevel: number;
  massLevel: number;
  baseForceLevel: number;
  stunImmune: boolean;
  silenceImmune: boolean;
  sleepImmune: boolean;
  frozenImmune: boolean;
  levitateImmune: boolean;
}

export interface AttributeKeyFrame {
  level: number;
  data: CharacterData;
}

export interface Phase {
  maxLevel: number;
  attributesKeyFrames: AttributeKeyFrame[];
}

export interface AttributeModifier {
  attributeType: number;
  value: number;
}

export interface Attributes {
  attributeModifiers: AttributeModifier[];
}

export interface Buff {
  attributes: Attributes;
}

export interface PotentialRank {
  buff: null | Buff;
}

export interface Character {
  name: string;
  nationId: string;
  phases: Phase[];
  position: string;
  potentialRanks: PotentialRank[];
  rarity: number;
  profession: string;
  subProfessionId: string;
  tags: string[];
}
