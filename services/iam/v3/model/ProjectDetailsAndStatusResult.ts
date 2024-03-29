

export class ProjectDetailsAndStatusResult {
    private 'domain_id'?: string;
    private 'is_domain'?: boolean;
    private 'parent_id'?: string;
    public name?: string;
    public description?: string;
    public id?: string;
    public enabled?: boolean;
    public status?: string;
    public constructor(domainId?: string, isDomain?: boolean, parentId?: string, name?: string, description?: string, id?: string, enabled?: boolean, status?: string) { 
        this['domain_id'] = domainId;
        this['is_domain'] = isDomain;
        this['parent_id'] = parentId;
        this['name'] = name;
        this['description'] = description;
        this['id'] = id;
        this['enabled'] = enabled;
        this['status'] = status;
    }
    public withDomainId(domainId: string): ProjectDetailsAndStatusResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIsDomain(isDomain: boolean): ProjectDetailsAndStatusResult {
        this['is_domain'] = isDomain;
        return this;
    }
    public set isDomain(isDomain: boolean  | undefined) {
        this['is_domain'] = isDomain;
    }
    public get isDomain(): boolean | undefined {
        return this['is_domain'];
    }
    public withParentId(parentId: string): ProjectDetailsAndStatusResult {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withName(name: string): ProjectDetailsAndStatusResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ProjectDetailsAndStatusResult {
        this['description'] = description;
        return this;
    }
    public withId(id: string): ProjectDetailsAndStatusResult {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): ProjectDetailsAndStatusResult {
        this['enabled'] = enabled;
        return this;
    }
    public withStatus(status: string): ProjectDetailsAndStatusResult {
        this['status'] = status;
        return this;
    }
}