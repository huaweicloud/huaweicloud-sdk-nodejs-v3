

export class DomainIdsUriPrimitiveTypeHolder {
    private 'domain_ids_uri'?: string;
    public constructor() { 
    }
    public withDomainIdsUri(domainIdsUri: string): DomainIdsUriPrimitiveTypeHolder {
        this['domain_ids_uri'] = domainIdsUri;
        return this;
    }
    public set domainIdsUri(domainIdsUri: string  | undefined) {
        this['domain_ids_uri'] = domainIdsUri;
    }
    public get domainIdsUri(): string | undefined {
        return this['domain_ids_uri'];
    }
}