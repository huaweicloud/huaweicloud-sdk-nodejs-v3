

export class ShowNamespaceAuthRequest {
    private 'Content-Type': ShowNamespaceAuthRequestContentTypeEnum | undefined;
    public namespace: string;
    public constructor(contentType?: any, namespace?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: ShowNamespaceAuthRequestContentTypeEnum): ShowNamespaceAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowNamespaceAuthRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowNamespaceAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNamespaceAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
