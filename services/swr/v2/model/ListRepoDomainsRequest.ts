

export class ListRepoDomainsRequest {
    private 'Content-Type': ListRepoDomainsRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListRepoDomainsRequestContentTypeEnum): ListRepoDomainsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRepoDomainsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRepoDomainsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRepoDomainsRequest {
        this['repository'] = repository;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepoDomainsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
