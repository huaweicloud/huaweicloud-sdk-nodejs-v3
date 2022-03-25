

export class ListRetentionsRequest {
    private 'Content-Type': ListRetentionsRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListRetentionsRequestContentTypeEnum): ListRetentionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRetentionsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRetentionsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRetentionsRequest {
        this['repository'] = repository;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRetentionsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
