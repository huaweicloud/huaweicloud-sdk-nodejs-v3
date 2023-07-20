

export class FinancialStatementRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean;
    private 'return_confidence'?: boolean;
    private 'return_excel'?: boolean;
    private 'return_table_location'?: boolean;
    private 'return_image_size'?: boolean;
    private 'return_rectification_matrix'?: boolean;
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
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
    public withReturnConfidence(returnConfidence: boolean): FinancialStatementRequestBody {
        this['return_confidence'] = returnConfidence;
        return this;
    }
    public set returnConfidence(returnConfidence: boolean  | undefined) {
        this['return_confidence'] = returnConfidence;
    }
    public get returnConfidence(): boolean | undefined {
        return this['return_confidence'];
    }
    public withReturnExcel(returnExcel: boolean): FinancialStatementRequestBody {
        this['return_excel'] = returnExcel;
        return this;
    }
    public set returnExcel(returnExcel: boolean  | undefined) {
        this['return_excel'] = returnExcel;
    }
    public get returnExcel(): boolean | undefined {
        return this['return_excel'];
    }
    public withReturnTableLocation(returnTableLocation: boolean): FinancialStatementRequestBody {
        this['return_table_location'] = returnTableLocation;
        return this;
    }
    public set returnTableLocation(returnTableLocation: boolean  | undefined) {
        this['return_table_location'] = returnTableLocation;
    }
    public get returnTableLocation(): boolean | undefined {
        return this['return_table_location'];
    }
    public withReturnImageSize(returnImageSize: boolean): FinancialStatementRequestBody {
        this['return_image_size'] = returnImageSize;
        return this;
    }
    public set returnImageSize(returnImageSize: boolean  | undefined) {
        this['return_image_size'] = returnImageSize;
    }
    public get returnImageSize(): boolean | undefined {
        return this['return_image_size'];
    }
    public withReturnRectificationMatrix(returnRectificationMatrix: boolean): FinancialStatementRequestBody {
        this['return_rectification_matrix'] = returnRectificationMatrix;
        return this;
    }
    public set returnRectificationMatrix(returnRectificationMatrix: boolean  | undefined) {
        this['return_rectification_matrix'] = returnRectificationMatrix;
    }
    public get returnRectificationMatrix(): boolean | undefined {
        return this['return_rectification_matrix'];
    }
}