

export class DeleteNamespacesRequest {
    private 'Content-Type': DeleteNamespacesRequestContentTypeEnum | undefined;
    public namespace: string;
    public constructor(contentType?: any, namespace?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: DeleteNamespacesRequestContentTypeEnum): DeleteNamespacesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteNamespacesRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteNamespacesRequest {
        this['namespace'] = namespace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteNamespacesRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
