

export class ListPrivateProviderVersionsRequest {
    private 'Client-Request-Id'?: string;
    private 'provider_name'?: string;
    private 'provider_id'?: string;
    private 'sort_key'?: Array<ListPrivateProviderVersionsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListPrivateProviderVersionsRequestSortDirEnum> | Array<string>;
    public marker?: string;
    public limit?: number;
    public constructor(clientRequestId?: string, providerName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['provider_name'] = providerName;
    }
    public withClientRequestId(clientRequestId: string): ListPrivateProviderVersionsRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProviderName(providerName: string): ListPrivateProviderVersionsRequest {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderId(providerId: string): ListPrivateProviderVersionsRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withSortKey(sortKey: Array<ListPrivateProviderVersionsRequestSortKeyEnum> | Array<string>): ListPrivateProviderVersionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListPrivateProviderVersionsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListPrivateProviderVersionsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListPrivateProviderVersionsRequestSortDirEnum> | Array<string>): ListPrivateProviderVersionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListPrivateProviderVersionsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListPrivateProviderVersionsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withMarker(marker: string): ListPrivateProviderVersionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPrivateProviderVersionsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateProviderVersionsRequestSortKeyEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateProviderVersionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
