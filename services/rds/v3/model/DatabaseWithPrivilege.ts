

export class DatabaseWithPrivilege {
    public name?: string;
    public readonly?: boolean;
    public constructor(name?: string, readonly?: boolean) { 
        this['name'] = name;
        this['readonly'] = readonly;
    }
    public withName(name: string): DatabaseWithPrivilege {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): DatabaseWithPrivilege {
        this['readonly'] = readonly;
        return this;
    }
}