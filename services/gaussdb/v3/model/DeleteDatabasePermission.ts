

export class DeleteDatabasePermission {
    public name?: string;
    public host?: string;
    public databases?: Array<string>;
    public constructor(name?: string, host?: string, databases?: Array<string>) { 
        this['name'] = name;
        this['host'] = host;
        this['databases'] = databases;
    }
    public withName(name: string): DeleteDatabasePermission {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): DeleteDatabasePermission {
        this['host'] = host;
        return this;
    }
    public withDatabases(databases: Array<string>): DeleteDatabasePermission {
        this['databases'] = databases;
        return this;
    }
}