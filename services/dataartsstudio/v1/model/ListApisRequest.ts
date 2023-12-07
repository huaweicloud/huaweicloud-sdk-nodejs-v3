

export class ListApisRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApisRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'x-return-publish-messages'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListApisRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApisRequestDlmTypeEnum | string): ListApisRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApisRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApisRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApisRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXReturnPublishMessages(xReturnPublishMessages: string): ListApisRequest {
        this['x-return-publish-messages'] = xReturnPublishMessages;
        return this;
    }
    public set xReturnPublishMessages(xReturnPublishMessages: string  | undefined) {
        this['x-return-publish-messages'] = xReturnPublishMessages;
    }
    public get xReturnPublishMessages(): string | undefined {
        return this['x-return-publish-messages'];
    }
    public withOffset(offset: number): ListApisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApisRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
