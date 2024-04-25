

export class ExportDataServiceExcelTemplateRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ExportDataServiceExcelTemplateRequestDlmTypeEnum | string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ExportDataServiceExcelTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ExportDataServiceExcelTemplateRequestDlmTypeEnum | string): ExportDataServiceExcelTemplateRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ExportDataServiceExcelTemplateRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ExportDataServiceExcelTemplateRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportDataServiceExcelTemplateRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
