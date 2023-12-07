

export class ListApplyRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApplyRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public offset?: number;
    public limit?: number;
    private 'api_name'?: string;
    private 'query_type'?: number;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListApplyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApplyRequestDlmTypeEnum | string): ListApplyRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApplyRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApplyRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApplyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOffset(offset: number): ListApplyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApplyRequest {
        this['limit'] = limit;
        return this;
    }
    public withApiName(apiName: string): ListApplyRequest {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withQueryType(queryType: number): ListApplyRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: number  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): number | undefined {
        return this['query_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApplyRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
