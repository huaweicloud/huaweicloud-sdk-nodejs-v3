

export class OrganizationNodeResponseInfo {
    private 'parent_id'?: string;
    public id?: string;
    public urn?: string;
    public name?: string;
    private 'org_type'?: string;
    public delegated?: boolean;
    public constructor() { 
    }
    public withParentId(parentId: string): OrganizationNodeResponseInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withId(id: string): OrganizationNodeResponseInfo {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): OrganizationNodeResponseInfo {
        this['urn'] = urn;
        return this;
    }
    public withName(name: string): OrganizationNodeResponseInfo {
        this['name'] = name;
        return this;
    }
    public withOrgType(orgType: string): OrganizationNodeResponseInfo {
        this['org_type'] = orgType;
        return this;
    }
    public set orgType(orgType: string  | undefined) {
        this['org_type'] = orgType;
    }
    public get orgType(): string | undefined {
        return this['org_type'];
    }
    public withDelegated(delegated: boolean): OrganizationNodeResponseInfo {
        this['delegated'] = delegated;
        return this;
    }
}