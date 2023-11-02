import { AppRequestDTO } from './AppRequestDTO';


export class CreateAppRequest {
    public workspace?: string;
    private 'Dlm-Type'?: CreateAppRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: AppRequestDTO;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): CreateAppRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: CreateAppRequestDlmTypeEnum | string): CreateAppRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: CreateAppRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): CreateAppRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): CreateAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AppRequestDTO): CreateAppRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAppRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
