export interface AccountContextType {
  ebayId: Variant;
  setEbayId: (id: Variant) => void;
}

export type Variant = 'poke_gems' | 'tcg_gems' | 'poke_relics';
