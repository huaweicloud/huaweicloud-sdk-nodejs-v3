

export class DelegatedAccountResponseInfo {
    private 'parent_id'?: string;
    private 'parent_name'?: string;
    public id?: string;
    public urn?: string;
    public name?: string;
    private 'org_type'?: string;
    public constructor() { 
    }
    public withParentId(parentId: string): DelegatedAccountResponseInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withParentName(parentName: string): DelegatedAccountResponseInfo {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withId(id: string): DelegatedAccountResponseInfo {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): DelegatedAccountResponseInfo {
        this['urn'] = urn;
        return this;
    }
    public withName(name: string): DelegatedAccountResponseInfo {
        this['name'] = name;
        return this;
    }
    public withOrgType(orgType: string): DelegatedAccountResponseInfo {
        this['org_type'] = orgType;
        return this;
    }
    public set orgType(orgType: string  | undefined) {
        this['org_type'] = orgType;
    }
    public get orgType(): string | undefined {
        return this['org_type'];
    }
}