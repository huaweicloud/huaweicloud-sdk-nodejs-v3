

export class ShowProjectStorageInfoRequest {
    private 'parent_id'?: string;
    public constructor() { 
    }
    public withParentId(parentId: string): ShowProjectStorageInfoRequest {
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