import { ApiParam } from './ApiParam';


export class ExportDataServiceZipRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ExportDataServiceZipRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: ApiParam;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ExportDataServiceZipRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ExportDataServiceZipRequestDlmTypeEnum | string): ExportDataServiceZipRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ExportDataServiceZipRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ExportDataServiceZipRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ExportDataServiceZipRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ApiParam): ExportDataServiceZipRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportDataServiceZipRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
