import { OpenApiParaForPublish } from './OpenApiParaForPublish';


export class PublishApiRequest {
    public workspace?: string;
    private 'Dlm-Type'?: PublishApiRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: OpenApiParaForPublish;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): PublishApiRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: PublishApiRequestDlmTypeEnum | string): PublishApiRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: PublishApiRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): PublishApiRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): PublishApiRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: OpenApiParaForPublish): PublishApiRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublishApiRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
