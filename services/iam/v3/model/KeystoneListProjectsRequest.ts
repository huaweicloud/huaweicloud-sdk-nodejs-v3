

export class KeystoneListProjectsRequest {
    private 'domain_id'?: string;
    public name?: string;
    private 'parent_id'?: string;
    public enabled?: boolean;
    private 'is_domain'?: boolean;
    public page?: number;
    private 'per_page'?: number;
    public constructor() { 
    }
    public withDomainId(domainId: string): KeystoneListProjectsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneListProjectsRequest {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): KeystoneListProjectsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withEnabled(enabled: boolean): KeystoneListProjectsRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withIsDomain(isDomain: boolean): KeystoneListProjectsRequest {
        this['is_domain'] = isDomain;
        return this;
    }
    public set isDomain(isDomain: boolean  | undefined) {
        this['is_domain'] = isDomain;
    }
    public get isDomain(): boolean | undefined {
        return this['is_domain'];
    }
    public withPage(page: number): KeystoneListProjectsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): KeystoneListProjectsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}