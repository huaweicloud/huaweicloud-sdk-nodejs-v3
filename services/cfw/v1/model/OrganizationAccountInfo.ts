

export class OrganizationAccountInfo {
    public delegated?: boolean;
    public id?: string;
    public name?: string;
    private 'org_type'?: string;
    private 'parent_id'?: string;
    public urn?: string;
    public constructor() { 
    }
    public withDelegated(delegated: boolean): OrganizationAccountInfo {
        this['delegated'] = delegated;
        return this;
    }
    public withId(id: string): OrganizationAccountInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OrganizationAccountInfo {
        this['name'] = name;
        return this;
    }
    public withOrgType(orgType: string): OrganizationAccountInfo {
        this['org_type'] = orgType;
        return this;
    }
    public set orgType(orgType: string  | undefined) {
        this['org_type'] = orgType;
    }
    public get orgType(): string | undefined {
        return this['org_type'];
    }
    public withParentId(parentId: string): OrganizationAccountInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withUrn(urn: string): OrganizationAccountInfo {
        this['urn'] = urn;
        return this;
    }
}