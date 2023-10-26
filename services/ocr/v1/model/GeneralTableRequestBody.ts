

export class GeneralTableRequestBody {
    public image?: string;
    public url?: string;
    private 'return_text_location'?: boolean;
    private 'return_char_location'?: boolean;
    private 'return_confidence'?: boolean;
    private 'return_excel'?: boolean;
    private 'return_rectification_matrix'?: boolean;
    private 'with_borders'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): GeneralTableRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): GeneralTableRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnTextLocation(returnTextLocation: boolean): GeneralTableRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
    public withReturnCharLocation(returnCharLocation: boolean): GeneralTableRequestBody {
        this['return_char_location'] = returnCharLocation;
        return this;
    }
    public set returnCharLocation(returnCharLocation: boolean  | undefined) {
        this['return_char_location'] = returnCharLocation;
    }
    public get returnCharLocation(): boolean | undefined {
        return this['return_char_location'];
    }
    public withReturnConfidence(returnConfidence: boolean): GeneralTableRequestBody {
        this['return_confidence'] = returnConfidence;
        return this;
    }
    public set returnConfidence(returnConfidence: boolean  | undefined) {
        this['return_confidence'] = returnConfidence;
    }
    public get returnConfidence(): boolean | undefined {
        return this['return_confidence'];
    }
    public withReturnExcel(returnExcel: boolean): GeneralTableRequestBody {
        this['return_excel'] = returnExcel;
        return this;
    }
    public set returnExcel(returnExcel: boolean  | undefined) {
        this['return_excel'] = returnExcel;
    }
    public get returnExcel(): boolean | undefined {
        return this['return_excel'];
    }
    public withReturnRectificationMatrix(returnRectificationMatrix: boolean): GeneralTableRequestBody {
        this['return_rectification_matrix'] = returnRectificationMatrix;
        return this;
    }
    public set returnRectificationMatrix(returnRectificationMatrix: boolean  | undefined) {
        this['return_rectification_matrix'] = returnRectificationMatrix;
    }
    public get returnRectificationMatrix(): boolean | undefined {
        return this['return_rectification_matrix'];
    }
    public withWithBorders(withBorders: boolean): GeneralTableRequestBody {
        this['with_borders'] = withBorders;
        return this;
    }
    public set withBorders(withBorders: boolean  | undefined) {
        this['with_borders'] = withBorders;
    }
    public get withBorders(): boolean | undefined {
        return this['with_borders'];
    }
}