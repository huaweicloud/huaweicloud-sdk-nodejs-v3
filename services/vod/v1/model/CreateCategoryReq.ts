

export class CreateCategoryReq {
    public name?: string;
    private 'parent_id'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateCategoryReq {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: number): CreateCategoryReq {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
}