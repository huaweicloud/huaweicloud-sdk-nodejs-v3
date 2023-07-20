import { UpdateRepoDomainsRequestBody } from './UpdateRepoDomainsRequestBody';


export class UpdateRepoDomainsRequest {
    private 'Content-Type'?: UpdateRepoDomainsRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    private 'access_domain'?: string;
    public body?: UpdateRepoDomainsRequestBody;
    public constructor(contentType?: string, namespace?: string, repository?: string, accessDomain?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['access_domain'] = accessDomain;
    }
    public withContentType(contentType: UpdateRepoDomainsRequestContentTypeEnum | string): UpdateRepoDomainsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateRepoDomainsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateRepoDomainsRequestContentTypeEnum | string | undefined {
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
    public set accessDomain(accessDomain: string  | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain(): string | undefined {
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
