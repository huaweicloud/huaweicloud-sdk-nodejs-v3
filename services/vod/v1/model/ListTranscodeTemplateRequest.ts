

export class ListTranscodeTemplateRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'group_id'?: string | undefined;
    private 'is_default'?: boolean | undefined;
    public offset?: number;
    public limit?: number;
    private 'query_string'?: string | undefined;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListTranscodeTemplateRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTranscodeTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withGroupId(groupId: string): ListTranscodeTemplateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withIsDefault(isDefault: boolean): ListTranscodeTemplateRequest {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault() {
        return this['is_default'];
    }
    public withOffset(offset: number): ListTranscodeTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTranscodeTemplateRequest {
        this['limit'] = limit;
        return this;
    }
    public withQueryString(queryString: string): ListTranscodeTemplateRequest {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString() {
        return this['query_string'];
    }
}