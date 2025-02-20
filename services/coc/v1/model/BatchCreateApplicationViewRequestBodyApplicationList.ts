

export class BatchCreateApplicationViewRequestBodyApplicationList {
    public name?: string;
    public description?: string;
    private 'parent_name'?: string;
    public level?: string;
    public constructor() { 
    }
    public withName(name: string): BatchCreateApplicationViewRequestBodyApplicationList {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BatchCreateApplicationViewRequestBodyApplicationList {
        this['description'] = description;
        return this;
    }
    public withParentName(parentName: string): BatchCreateApplicationViewRequestBodyApplicationList {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withLevel(level: string): BatchCreateApplicationViewRequestBodyApplicationList {
        this['level'] = level;
        return this;
    }
}