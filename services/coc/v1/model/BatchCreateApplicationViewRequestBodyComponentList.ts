

export class BatchCreateApplicationViewRequestBodyComponentList {
    public name?: string;
    private 'parent_name'?: string;
    public constructor() { 
    }
    public withName(name: string): BatchCreateApplicationViewRequestBodyComponentList {
        this['name'] = name;
        return this;
    }
    public withParentName(parentName: string): BatchCreateApplicationViewRequestBodyComponentList {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
}