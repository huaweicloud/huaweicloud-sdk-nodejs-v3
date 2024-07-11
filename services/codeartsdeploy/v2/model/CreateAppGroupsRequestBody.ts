

export class CreateAppGroupsRequestBody {
    public name?: string;
    private 'parent_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateAppGroupsRequestBody {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): CreateAppGroupsRequestBody {
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