

export class ShowNamespaceRequest {
    private 'Content-Type'?: ShowNamespaceRequestContentTypeEnum | string;
    public namespace?: string;
    public constructor(contentType?: string, namespace?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: ShowNamespaceRequestContentTypeEnum | string): ShowNamespaceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowNamespaceRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowNamespaceRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowNamespaceRequest {
        this['namespace'] = namespace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNamespaceRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
