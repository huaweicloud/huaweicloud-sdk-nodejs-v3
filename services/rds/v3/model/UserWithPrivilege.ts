

export class UserWithPrivilege {
    public name?: string;
    public readonly?: boolean;
    public constructor(name?: string, readonly?: boolean) { 
        this['name'] = name;
        this['readonly'] = readonly;
    }
    public withName(name: string): UserWithPrivilege {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): UserWithPrivilege {
        this['readonly'] = readonly;
        return this;
    }
}