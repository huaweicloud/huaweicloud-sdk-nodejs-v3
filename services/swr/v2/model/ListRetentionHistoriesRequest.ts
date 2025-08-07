

export class ListRetentionHistoriesRequest {
    private 'Content-Type'?: ListRetentionHistoriesRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public limit?: string;
    public offset?: string;
    public filter?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListRetentionHistoriesRequestContentTypeEnum | string): ListRetentionHistoriesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRetentionHistoriesRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListRetentionHistoriesRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRetentionHistoriesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRetentionHistoriesRequest {
        this['repository'] = repository;
        return this;
    }
    public withLimit(limit: string): ListRetentionHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListRetentionHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withFilter(filter: string): ListRetentionHistoriesRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRetentionHistoriesRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
