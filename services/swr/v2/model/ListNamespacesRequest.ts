

export class ListNamespacesRequest {
    private 'Content-Type'?: ListNamespacesRequestContentTypeEnum | string;
    public namespace?: string;
    public filter?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListNamespacesRequestContentTypeEnum | string): ListNamespacesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListNamespacesRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListNamespacesRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListNamespacesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withFilter(filter: string): ListNamespacesRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNamespacesRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
