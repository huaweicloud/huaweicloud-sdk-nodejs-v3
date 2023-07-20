

export class ShowAccessDomainRequest {
    private 'Content-Type'?: ShowAccessDomainRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    private 'access_domain'?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, accessDomain?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['access_domain'] = accessDomain;
    }
    public withContentType(contentType: ShowAccessDomainRequestContentTypeEnum | string): ShowAccessDomainRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowAccessDomainRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowAccessDomainRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ShowAccessDomainRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowAccessDomainRequest {
        this['repository'] = repository;
        return this;
    }
    public withAccessDomain(accessDomain: string): ShowAccessDomainRequest {
        this['access_domain'] = accessDomain;
        return this;
    }
    public set accessDomain(accessDomain: string  | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain(): string | undefined {
        return this['access_domain'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAccessDomainRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
