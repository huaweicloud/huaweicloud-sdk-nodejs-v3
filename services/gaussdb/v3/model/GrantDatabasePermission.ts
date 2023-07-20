import { DatabasePermission } from './DatabasePermission';


export class GrantDatabasePermission {
    public name?: string;
    public host?: string;
    public databases?: Array<DatabasePermission>;
    public constructor(name?: string, host?: string, databases?: Array<DatabasePermission>) { 
        this['name'] = name;
        this['host'] = host;
        this['databases'] = databases;
    }
    public withName(name: string): GrantDatabasePermission {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): GrantDatabasePermission {
        this['host'] = host;
        return this;
    }
    public withDatabases(databases: Array<DatabasePermission>): GrantDatabasePermission {
        this['databases'] = databases;
        return this;
    }
}