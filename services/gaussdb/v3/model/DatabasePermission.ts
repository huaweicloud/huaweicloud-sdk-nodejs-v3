

export class DatabasePermission {
    public name?: string;
    public readonly?: boolean;
    public constructor(name?: string, readonly?: boolean) { 
        this['name'] = name;
        this['readonly'] = readonly;
    }
    public withName(name: string): DatabasePermission {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): DatabasePermission {
        this['readonly'] = readonly;
        return this;
    }
}