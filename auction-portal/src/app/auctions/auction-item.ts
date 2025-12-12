export interface AuctionItem {
  id: string;
  title: string;
  imgUrl: string;
  price: number;
  description?: string;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
export type AuctionItemWithoutId = Omit<AuctionItem, 'id'>