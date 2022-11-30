

export class FinancialStatementRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean | undefined;
    private 'return_confidence'?: boolean | undefined;
    private 'return_excel'?: boolean | undefined;
    private 'return_table_location'?: boolean | undefined;
    private 'return_image_size'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): FinancialStatementRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): FinancialStatementRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnTextLocation(returnTextLocation: boolean): FinancialStatementRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation() {
        return this['return_text_location'];
    }
    public withReturnConfidence(returnConfidence: boolean): FinancialStatementRequestBody {
        this['return_confidence'] = returnConfidence;
        return this;
    }
    public set returnConfidence(returnConfidence: boolean | undefined) {
        this['return_confidence'] = returnConfidence;
    }
    public get returnConfidence() {
        return this['return_confidence'];
    }
    public withReturnExcel(returnExcel: boolean): FinancialStatementRequestBody {
        this['return_excel'] = returnExcel;
        return this;
    }
    public set returnExcel(returnExcel: boolean | undefined) {
        this['return_excel'] = returnExcel;
    }
    public get returnExcel() {
        return this['return_excel'];
    }
    public withReturnTableLocation(returnTableLocation: boolean): FinancialStatementRequestBody {
        this['return_table_location'] = returnTableLocation;
        return this;
    }
    public set returnTableLocation(returnTableLocation: boolean | undefined) {
        this['return_table_location'] = returnTableLocation;
    }
    public get returnTableLocation() {
        return this['return_table_location'];
    }
    public withReturnImageSize(returnImageSize: boolean): FinancialStatementRequestBody {
        this['return_image_size'] = returnImageSize;
        return this;
    }
    public set returnImageSize(returnImageSize: boolean | undefined) {
        this['return_image_size'] = returnImageSize;
    }
    public get returnImageSize() {
        return this['return_image_size'];
    }
}