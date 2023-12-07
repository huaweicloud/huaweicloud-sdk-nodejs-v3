

export class SearchAuthorizeAppRequest {
    public workspace?: string;
    private 'Dlm-Type'?: SearchAuthorizeAppRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string, contentType?: string, apiId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
    }
    public withWorkspace(workspace: string): SearchAuthorizeAppRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: SearchAuthorizeAppRequestDlmTypeEnum | string): SearchAuthorizeAppRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: SearchAuthorizeAppRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): SearchAuthorizeAppRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): SearchAuthorizeAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): SearchAuthorizeAppRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withOffset(offset: number): SearchAuthorizeAppRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchAuthorizeAppRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchAuthorizeAppRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
