

export class GaussMySqlDatabaseUser {
    public name?: string;
    public host?: string;
    public readonly?: boolean;
    public constructor(name?: string, host?: string, readonly?: boolean) { 
        this['name'] = name;
        this['host'] = host;
        this['readonly'] = readonly;
    }
    public withName(name: string): GaussMySqlDatabaseUser {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): GaussMySqlDatabaseUser {
        this['host'] = host;
        return this;
    }
    public withReadonly(readonly: boolean): GaussMySqlDatabaseUser {
        this['readonly'] = readonly;
        return this;
    }
}