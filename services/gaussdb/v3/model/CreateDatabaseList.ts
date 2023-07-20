

export class CreateDatabaseList {
    public name?: string;
    public readonly?: boolean;
    public constructor(name?: string, readonly?: boolean) { 
        this['name'] = name;
        this['readonly'] = readonly;
    }
    public withName(name: string): CreateDatabaseList {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): CreateDatabaseList {
        this['readonly'] = readonly;
        return this;
    }
}