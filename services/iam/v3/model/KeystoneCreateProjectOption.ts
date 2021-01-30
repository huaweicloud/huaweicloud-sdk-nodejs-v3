

export class KeystoneCreateProjectOption {
    public name: string;
    private 'parent_id': string | undefined;
    private 'domain_id'?: string | undefined;
    public description?: string;
    public constructor(name: any, parentId: any) { 
        this['name'] = name;
        this['parent_id'] = parentId;
    }
    public withName(name: string): KeystoneCreateProjectOption {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): KeystoneCreateProjectOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withDomainId(domainId: string): KeystoneCreateProjectOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withDescription(description: string): KeystoneCreateProjectOption {
        this['description'] = description;
        return this;
    }
}