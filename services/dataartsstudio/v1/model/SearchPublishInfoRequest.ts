

export class SearchPublishInfoRequest {
    public workspace?: string;
    private 'Dlm-Type'?: SearchPublishInfoRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, contentType?: string, apiId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
    }
    public withWorkspace(workspace: string): SearchPublishInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: SearchPublishInfoRequestDlmTypeEnum | string): SearchPublishInfoRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: SearchPublishInfoRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): SearchPublishInfoRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): SearchPublishInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): SearchPublishInfoRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withLimit(limit: number): SearchPublishInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchPublishInfoRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchPublishInfoRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
