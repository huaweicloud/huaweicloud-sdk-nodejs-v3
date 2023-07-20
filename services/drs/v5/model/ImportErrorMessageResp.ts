

export class ImportErrorMessageResp {
    private 'sheet_name'?: string;
    private 'row_rum'?: string;
    public value?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withSheetName(sheetName: string): ImportErrorMessageResp {
        this['sheet_name'] = sheetName;
        return this;
    }
    public set sheetName(sheetName: string  | undefined) {
        this['sheet_name'] = sheetName;
    }
    public get sheetName(): string | undefined {
        return this['sheet_name'];
    }
    public withRowRum(rowRum: string): ImportErrorMessageResp {
        this['row_rum'] = rowRum;
        return this;
    }
    public set rowRum(rowRum: string  | undefined) {
        this['row_rum'] = rowRum;
    }
    public get rowRum(): string | undefined {
        return this['row_rum'];
    }
    public withValue(value: string): ImportErrorMessageResp {
        this['value'] = value;
        return this;
    }
    public withErrorMessage(errorMessage: string): ImportErrorMessageResp {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}