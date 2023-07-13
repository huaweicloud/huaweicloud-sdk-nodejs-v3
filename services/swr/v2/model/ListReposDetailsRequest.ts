

export class ListReposDetailsRequest {
    private 'Content-Type': ListReposDetailsRequestContentTypeEnum | undefined;
    public namespace?: string;
    public name?: string;
    public category?: string;
    public limit?: string;
    public offset?: string;
    private 'order_column'?: string | undefined;
    private 'order_type'?: string | undefined;
    public filter?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListReposDetailsRequestContentTypeEnum): ListReposDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListReposDetailsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListReposDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ListReposDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ListReposDetailsRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: string): ListReposDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListReposDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderColumn(orderColumn: string): ListReposDetailsRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn() {
        return this['order_column'];
    }
    public withOrderType(orderType: string): ListReposDetailsRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType() {
        return this['order_type'];
    }
    public withFilter(filter: string): ListReposDetailsRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListReposDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
