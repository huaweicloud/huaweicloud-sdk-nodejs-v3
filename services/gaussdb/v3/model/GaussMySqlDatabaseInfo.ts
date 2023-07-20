

export class GaussMySqlDatabaseInfo {
    public name?: string;
    public host?: string;
    public readonly?: boolean;
    public constructor() { 
    }
    public withName(name: string): GaussMySqlDatabaseInfo {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): GaussMySqlDatabaseInfo {
        this['host'] = host;
        return this;
    }
    public withReadonly(readonly: boolean): GaussMySqlDatabaseInfo {
        this['readonly'] = readonly;
        return this;
    }
}