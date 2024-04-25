

export class ExportDataServiceExcelRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ExportDataServiceExcelRequestDlmTypeEnum | string;
    public body?: Array<string>;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ExportDataServiceExcelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ExportDataServiceExcelRequestDlmTypeEnum | string): ExportDataServiceExcelRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ExportDataServiceExcelRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ExportDataServiceExcelRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withBody(body: Array<string>): ExportDataServiceExcelRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportDataServiceExcelRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
