

export class DeleteRepoDomainsRequest {
    private 'Content-Type': DeleteRepoDomainsRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    private 'access_domain': string | undefined;
    public constructor(contentType?: any, namespace?: any, repository?: any, accessDomain?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['access_domain'] = accessDomain;
    }
    public withContentType(contentType: DeleteRepoDomainsRequestContentTypeEnum): DeleteRepoDomainsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteRepoDomainsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): DeleteRepoDomainsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): DeleteRepoDomainsRequest {
        this['repository'] = repository;
        return this;
    }
    public withAccessDomain(accessDomain: string): DeleteRepoDomainsRequest {
        this['access_domain'] = accessDomain;
        return this;
    }
    public set accessDomain(accessDomain: string | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain() {
        return this['access_domain'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteRepoDomainsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
