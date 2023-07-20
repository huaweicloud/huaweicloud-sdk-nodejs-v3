

export class ListImageAutoSyncReposDetailsRequest {
    private 'Content-Type'?: ListImageAutoSyncReposDetailsRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListImageAutoSyncReposDetailsRequestContentTypeEnum | string): ListImageAutoSyncReposDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListImageAutoSyncReposDetailsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListImageAutoSyncReposDetailsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListImageAutoSyncReposDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListImageAutoSyncReposDetailsRequest {
        this['repository'] = repository;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImageAutoSyncReposDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
