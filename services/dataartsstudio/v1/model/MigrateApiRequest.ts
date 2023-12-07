import { ApiMoveParaDTO } from './ApiMoveParaDTO';


export class MigrateApiRequest {
    public workspace?: string;
    private 'Dlm-Type'?: MigrateApiRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: ApiMoveParaDTO;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): MigrateApiRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: MigrateApiRequestDlmTypeEnum | string): MigrateApiRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: MigrateApiRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): MigrateApiRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): MigrateApiRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ApiMoveParaDTO): MigrateApiRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigrateApiRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
