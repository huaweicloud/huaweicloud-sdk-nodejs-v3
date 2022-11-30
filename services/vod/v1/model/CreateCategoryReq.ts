

export class CreateCategoryReq {
    public name: string;
    private 'parent_id'?: number | undefined;
    public constructor(name?: any) { 
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
    public set parentId(parentId: number | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
}