

export class BankReceiptRequestBody {
    public data?: string;
    public url?: string;
    public constructor() { 
    }
    public withData(data: string): BankReceiptRequestBody {
        this['data'] = data;
        return this;
    }
    public withUrl(url: string): BankReceiptRequestBody {
        this['url'] = url;
        return this;
    }
}