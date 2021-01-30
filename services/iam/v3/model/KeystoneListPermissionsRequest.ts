

export class KeystoneListPermissionsRequest {
    public name?: string;
    private 'domain_id'?: string | undefined;
    public page?: number;
    private 'per_page'?: number | undefined;
    public constructor() { 
    }
    public withName(name: string): KeystoneListPermissionsRequest {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): KeystoneListPermissionsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withPage(page: number): KeystoneListPermissionsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): KeystoneListPermissionsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage() {
        return this['per_page'];
    }
}