

export class ListMessageRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListMessageRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public offset?: number;
    public limit?: number;
    private 'api_name'?: string;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListMessageRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListMessageRequestDlmTypeEnum | string): ListMessageRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListMessageRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListMessageRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListMessageRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOffset(offset: number): ListMessageRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMessageRequest {
        this['limit'] = limit;
        return this;
    }
    public withApiName(apiName: string): ListMessageRequest {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMessageRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
