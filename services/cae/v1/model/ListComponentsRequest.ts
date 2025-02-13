

export class ListComponentsRequest {
    private 'application_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public limit?: string;
    public offset?: string;
    private 'sort_key'?: ListComponentsRequestSortKeyEnum | string;
    public sort?: ListComponentsRequestSortEnum | string;
    public constructor(applicationId?: string, xEnvironmentID?: string) { 
        this['application_id'] = applicationId;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withApplicationId(applicationId: string): ListComponentsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ListComponentsRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): ListComponentsRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withLimit(limit: string): ListComponentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListComponentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: ListComponentsRequestSortKeyEnum | string): ListComponentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListComponentsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListComponentsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSort(sort: ListComponentsRequestSortEnum | string): ListComponentsRequest {
        this['sort'] = sort;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListComponentsRequestSortKeyEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListComponentsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
