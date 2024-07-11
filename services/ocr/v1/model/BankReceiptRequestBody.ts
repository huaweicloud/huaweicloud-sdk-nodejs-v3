

export class BankReceiptRequestBody {
    public data?: string;
    public url?: string;
    private 'page_num'?: number;
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
    public withPageNum(pageNum: number): BankReceiptRequestBody {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
}