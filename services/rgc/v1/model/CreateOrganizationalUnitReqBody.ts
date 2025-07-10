

export class CreateOrganizationalUnitReqBody {
    public name?: string;
    private 'parent_id'?: string;
    public constructor(name?: string, parentId?: string) { 
        this['name'] = name;
        this['parent_id'] = parentId;
    }
    public withName(name: string): CreateOrganizationalUnitReqBody {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): CreateOrganizationalUnitReqBody {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}