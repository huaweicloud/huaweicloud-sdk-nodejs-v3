

export class ShowNamespaceRequest {
    private 'Content-Type': ShowNamespaceRequestContentTypeEnum | undefined;
    public namespace: string;
    public constructor(contentType?: any, namespace?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: ShowNamespaceRequestContentTypeEnum): ShowNamespaceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowNamespaceRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
