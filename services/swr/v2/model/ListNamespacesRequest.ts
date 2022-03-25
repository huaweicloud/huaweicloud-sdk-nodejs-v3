

export class ListNamespacesRequest {
    private 'Content-Type': ListNamespacesRequestContentTypeEnum | undefined;
    public namespace?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListNamespacesRequestContentTypeEnum): ListNamespacesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListNamespacesRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListNamespacesRequest {
        this['namespace'] = namespace;
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
