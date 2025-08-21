

export class CreateGroupRequestBody {
    public name?: string;
    private 'parent_id'?: number;
    public visibility?: CreateGroupRequestBodyVisibilityEnum | string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: number): CreateGroupRequestBody {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withVisibility(visibility: CreateGroupRequestBodyVisibilityEnum | string): CreateGroupRequestBody {
        this['visibility'] = visibility;
        return this;
    }
    public withDescription(description: string): CreateGroupRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGroupRequestBodyVisibilityEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
