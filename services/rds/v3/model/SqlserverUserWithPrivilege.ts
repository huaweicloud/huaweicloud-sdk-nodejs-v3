

export class SqlserverUserWithPrivilege {
    public name?: string;
    public readonly?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): SqlserverUserWithPrivilege {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): SqlserverUserWithPrivilege {
        this['readonly'] = readonly;
        return this;
    }
}