

export class ShowMessageDetailRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowMessageDetailRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'message_id'?: string;
    public constructor(workspace?: string, contentType?: string, messageId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['message_id'] = messageId;
    }
    public withWorkspace(workspace: string): ShowMessageDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowMessageDetailRequestDlmTypeEnum | string): ShowMessageDetailRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowMessageDetailRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowMessageDetailRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowMessageDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withMessageId(messageId: string): ShowMessageDetailRequest {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMessageDetailRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
