import { UserAuth } from './UserAuth';


export class UpdateNamespaceAuthRequest {
    private 'Content-Type': UpdateNamespaceAuthRequestContentTypeEnum | undefined;
    public namespace: string;
    public body?: Array<UserAuth>;
    public constructor(contentType?: any, namespace?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
    }
    public withContentType(contentType: UpdateNamespaceAuthRequestContentTypeEnum): UpdateNamespaceAuthRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateNamespaceAuthRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): UpdateNamespaceAuthRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: Array<UserAuth>): UpdateNamespaceAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNamespaceAuthRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
