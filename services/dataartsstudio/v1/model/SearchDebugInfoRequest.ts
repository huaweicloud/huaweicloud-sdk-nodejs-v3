

export class SearchDebugInfoRequest {
    public workspace?: string;
    private 'Dlm-Type'?: SearchDebugInfoRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, apiId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
    }
    public withWorkspace(workspace: string): SearchDebugInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: SearchDebugInfoRequestDlmTypeEnum | string): SearchDebugInfoRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: SearchDebugInfoRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): SearchDebugInfoRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): SearchDebugInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): SearchDebugInfoRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withLimit(limit: number): SearchDebugInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchDebugInfoRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchDebugInfoRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
