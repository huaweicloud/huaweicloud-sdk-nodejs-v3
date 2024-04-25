import { ImportDataServiceExcelRequestBody } from './ImportDataServiceExcelRequestBody';


export class ImportDataServiceExcelRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ImportDataServiceExcelRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: ImportDataServiceExcelRequestBody;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ImportDataServiceExcelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ImportDataServiceExcelRequestDlmTypeEnum | string): ImportDataServiceExcelRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ImportDataServiceExcelRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ImportDataServiceExcelRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ImportDataServiceExcelRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ImportDataServiceExcelRequestBody): ImportDataServiceExcelRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportDataServiceExcelRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
