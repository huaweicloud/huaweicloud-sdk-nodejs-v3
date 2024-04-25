import { BankReceiptKvPair } from './BankReceiptKvPair';


export class BankReceiptDict {
    private 'kv_pair_count'?: number;
    private 'bank_receipt_location'?: Array<Array<number>>;
    private 'kv_pair_list'?: Array<BankReceiptKvPair>;
    public constructor() { 
    }
    public withKvPairCount(kvPairCount: number): BankReceiptDict {
        this['kv_pair_count'] = kvPairCount;
        return this;
    }
    public set kvPairCount(kvPairCount: number  | undefined) {
        this['kv_pair_count'] = kvPairCount;
    }
    public get kvPairCount(): number | undefined {
        return this['kv_pair_count'];
    }
    public withBankReceiptLocation(bankReceiptLocation: Array<Array<number>>): BankReceiptDict {
        this['bank_receipt_location'] = bankReceiptLocation;
        return this;
    }
    public set bankReceiptLocation(bankReceiptLocation: Array<Array<number>>  | undefined) {
        this['bank_receipt_location'] = bankReceiptLocation;
    }
    public get bankReceiptLocation(): Array<Array<number>> | undefined {
        return this['bank_receipt_location'];
    }
    public withKvPairList(kvPairList: Array<BankReceiptKvPair>): BankReceiptDict {
        this['kv_pair_list'] = kvPairList;
        return this;
    }
    public set kvPairList(kvPairList: Array<BankReceiptKvPair>  | undefined) {
        this['kv_pair_list'] = kvPairList;
    }
    public get kvPairList(): Array<BankReceiptKvPair> | undefined {
        return this['kv_pair_list'];
    }
}