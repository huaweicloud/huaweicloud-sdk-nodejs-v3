

export class SmartDocumentRecognizerRequestBody {
    public data?: string;
    public url?: string;
    public kv?: boolean;
    public table?: boolean;
    public layout?: boolean;
    private 'return_excel'?: boolean;
    public constructor() { 
    }
    public withData(data: string): SmartDocumentRecognizerRequestBody {
        this['data'] = data;
        return this;
    }
    public withUrl(url: string): SmartDocumentRecognizerRequestBody {
        this['url'] = url;
        return this;
    }
    public withKv(kv: boolean): SmartDocumentRecognizerRequestBody {
        this['kv'] = kv;
        return this;
    }
    public withTable(table: boolean): SmartDocumentRecognizerRequestBody {
        this['table'] = table;
        return this;
    }
    public withLayout(layout: boolean): SmartDocumentRecognizerRequestBody {
        this['layout'] = layout;
        return this;
    }
    public withReturnExcel(returnExcel: boolean): SmartDocumentRecognizerRequestBody {
        this['return_excel'] = returnExcel;
        return this;
    }
    public set returnExcel(returnExcel: boolean  | undefined) {
        this['return_excel'] = returnExcel;
    }
    public get returnExcel(): boolean | undefined {
        return this['return_excel'];
    }
}