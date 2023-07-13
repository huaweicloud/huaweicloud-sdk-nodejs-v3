import { UpdateRepoDomainsRequestBody } from './UpdateRepoDomainsRequestBody';


export class UpdateRepoDomainsRequest {
    private 'Content-Type': UpdateRepoDomainsRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    private 'access_domain': string | undefined;
    public body?: UpdateRepoDomainsRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any, accessDomain?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['access_domain'] = accessDomain;
    }
    public withContentType(contentType: UpdateRepoDomainsRequestContentTypeEnum): UpdateRepoDomainsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateRepoDomainsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): UpdateRepoDomainsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): UpdateRepoDomainsRequest {
        this['repository'] = repository;
        return this;
    }
    public withAccessDomain(accessDomain: string): UpdateRepoDomainsRequest {
        this['access_domain'] = accessDomain;
        return this;
    }
    public set accessDomain(accessDomain: string | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain() {
        return this['access_domain'];
    }
    public withBody(body: UpdateRepoDomainsRequestBody): UpdateRepoDomainsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepoDomainsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
