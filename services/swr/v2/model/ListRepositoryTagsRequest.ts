

export class ListRepositoryTagsRequest {
    private 'Content-Type': ListRepositoryTagsRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public offset?: string;
    public limit?: string;
    private 'order_column'?: string | undefined;
    private 'order_type'?: ListRepositoryTagsRequestOrderTypeEnum | undefined;
    public tag?: string;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListRepositoryTagsRequestContentTypeEnum): ListRepositoryTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRepositoryTagsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRepositoryTagsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRepositoryTagsRequest {
        this['repository'] = repository;
        return this;
    }
    public withOffset(offset: string): ListRepositoryTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListRepositoryTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderColumn(orderColumn: string): ListRepositoryTagsRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn() {
        return this['order_column'];
    }
    public withOrderType(orderType: ListRepositoryTagsRequestOrderTypeEnum): ListRepositoryTagsRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: ListRepositoryTagsRequestOrderTypeEnum | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType() {
        return this['order_type'];
    }
    public withTag(tag: string): ListRepositoryTagsRequest {
        this['tag'] = tag;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryTagsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryTagsRequestOrderTypeEnum {
    DESC = 'desc',
    ASC = 'asc'
}
