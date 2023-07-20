

export class DeleteNamespacesRequest {
    private 'Content-Type'?: DeleteNamespacesRequestContentTypeEnum | string;
    public namespace?: string;
    public constructor(contentType?: string, namespace?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: DeleteNamespacesRequestContentTypeEnum | string): DeleteNamespacesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteNamespacesRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteNamespacesRequestContentTypeEnum | string | undefined {
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
