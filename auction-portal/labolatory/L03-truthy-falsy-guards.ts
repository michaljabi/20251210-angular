import { AuctionItem } from '../src/app/auctions/auction-item';

let auction: AuctionItem | undefined;

console.log(auction);

// jest taki feature JS, że do if możesz wrzucić DOWOLNĄ rzecz!
// można dowolną, bo "by the end of the day" JS zrobi tak Boolean(dowolna_rzecz) - czyli zrzutuje na boolean
if(auction) {
    console.log(auction.id)
}