

export class ShowNamespaceAuthRequest {
    private 'Content-Type'?: ShowNamespaceAuthRequestContentTypeEnum | string;
    public namespace?: string;
    public constructor(contentType?: string, namespace?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: ShowNamespaceAuthRequestContentTypeEnum | string): ShowNamespaceAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowNamespaceAuthRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowNamespaceAuthRequestContentTypeEnum | string | undefined {
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
