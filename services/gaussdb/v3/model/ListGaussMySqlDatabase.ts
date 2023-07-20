

export class ListGaussMySqlDatabase {
    public name?: string;
    public readonly?: boolean;
    public constructor() { 
    }
    public withName(name: string): ListGaussMySqlDatabase {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): ListGaussMySqlDatabase {
        this['readonly'] = readonly;
        return this;
    }
}