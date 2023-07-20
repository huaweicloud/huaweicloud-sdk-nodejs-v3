

export class DatabaseWithPrivilegeObject {
    public name?: string;
    public readonly?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DatabaseWithPrivilegeObject {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): DatabaseWithPrivilegeObject {
        this['readonly'] = readonly;
        return this;
    }
}