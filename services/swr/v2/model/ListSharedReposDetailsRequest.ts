

export class ListSharedReposDetailsRequest {
    private 'Content-Type'?: ListSharedReposDetailsRequestContentTypeEnum | string;
    public namespace?: string;
    public name?: string;
    public center?: string;
    public limit?: string;
    public offset?: string;
    private 'order_column'?: string;
    private 'order_type'?: string;
    public filter?: string;
    public constructor(contentType?: string, center?: string) { 
        this['Content-Type'] = contentType;
        this['center'] = center;
    }
    public withContentType(contentType: ListSharedReposDetailsRequestContentTypeEnum | string): ListSharedReposDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListSharedReposDetailsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListSharedReposDetailsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListSharedReposDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ListSharedReposDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withCenter(center: string): ListSharedReposDetailsRequest {
        this['center'] = center;
        return this;
    }
    public withLimit(limit: string): ListSharedReposDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListSharedReposDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderColumn(orderColumn: string): ListSharedReposDetailsRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: string): ListSharedReposDetailsRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): string | undefined {
        return this['order_type'];
    }
    public withFilter(filter: string): ListSharedReposDetailsRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSharedReposDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
