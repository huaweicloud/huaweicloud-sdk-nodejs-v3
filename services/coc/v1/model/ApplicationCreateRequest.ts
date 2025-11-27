

export class ApplicationCreateRequest {
    public name?: string;
    private 'parent_id'?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ApplicationCreateRequest {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): ApplicationCreateRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withDescription(description: string): ApplicationCreateRequest {
        this['description'] = description;
        return this;
    }
}