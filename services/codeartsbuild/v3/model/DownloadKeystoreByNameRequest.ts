

export class DownloadKeystoreByNameRequest {
    public name?: string;
    private 'domain_id'?: string;
    public id?: string;
    public constructor(name?: string, domainId?: string, id?: string) { 
        this['name'] = name;
        this['domain_id'] = domainId;
        this['id'] = id;
    }
    public withName(name: string): DownloadKeystoreByNameRequest {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): DownloadKeystoreByNameRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withId(id: string): DownloadKeystoreByNameRequest {
        this['id'] = id;
        return this;
    }
}