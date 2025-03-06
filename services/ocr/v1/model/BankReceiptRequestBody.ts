

export class BankReceiptRequestBody {
    public data?: string;
    public url?: string;
    private 'page_num'?: number;
    private 'single_orientation_mode'?: boolean;
    private 'erase_seal'?: boolean;
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
    public withSingleOrientationMode(singleOrientationMode: boolean): BankReceiptRequestBody {
        this['single_orientation_mode'] = singleOrientationMode;
        return this;
    }
    public set singleOrientationMode(singleOrientationMode: boolean  | undefined) {
        this['single_orientation_mode'] = singleOrientationMode;
    }
    public get singleOrientationMode(): boolean | undefined {
        return this['single_orientation_mode'];
    }
    public withEraseSeal(eraseSeal: boolean): BankReceiptRequestBody {
        this['erase_seal'] = eraseSeal;
        return this;
    }
    public set eraseSeal(eraseSeal: boolean  | undefined) {
        this['erase_seal'] = eraseSeal;
    }
    public get eraseSeal(): boolean | undefined {
        return this['erase_seal'];
    }
}