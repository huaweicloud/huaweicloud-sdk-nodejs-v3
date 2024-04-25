import { BankReceiptDict } from './BankReceiptDict';


export class BankReceiptResult {
    private 'bank_receipt_count'?: number;
    private 'bank_receipt_list'?: Array<BankReceiptDict>;
    public constructor() { 
    }
    public withBankReceiptCount(bankReceiptCount: number): BankReceiptResult {
        this['bank_receipt_count'] = bankReceiptCount;
        return this;
    }
    public set bankReceiptCount(bankReceiptCount: number  | undefined) {
        this['bank_receipt_count'] = bankReceiptCount;
    }
    public get bankReceiptCount(): number | undefined {
        return this['bank_receipt_count'];
    }
    public withBankReceiptList(bankReceiptList: Array<BankReceiptDict>): BankReceiptResult {
        this['bank_receipt_list'] = bankReceiptList;
        return this;
    }
    public set bankReceiptList(bankReceiptList: Array<BankReceiptDict>  | undefined) {
        this['bank_receipt_list'] = bankReceiptList;
    }
    public get bankReceiptList(): Array<BankReceiptDict> | undefined {
        return this['bank_receipt_list'];
    }
}