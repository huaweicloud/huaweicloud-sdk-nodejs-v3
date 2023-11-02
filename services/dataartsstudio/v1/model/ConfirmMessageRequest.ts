import { OpenApiParaForCheckMessage } from './OpenApiParaForCheckMessage';


export class ConfirmMessageRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ConfirmMessageRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: OpenApiParaForCheckMessage;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ConfirmMessageRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ConfirmMessageRequestDlmTypeEnum | string): ConfirmMessageRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ConfirmMessageRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ConfirmMessageRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ConfirmMessageRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: OpenApiParaForCheckMessage): ConfirmMessageRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmMessageRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
