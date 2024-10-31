import { DatabaseWithPrivilegeObject } from './DatabaseWithPrivilegeObject';


export class UserForList {
    public name?: string;
    public databases?: Array<DatabaseWithPrivilegeObject>;
    public hosts?: Array<string>;
    public constructor(name?: string, databases?: Array<DatabaseWithPrivilegeObject>, hosts?: Array<string>) { 
        this['name'] = name;
        this['databases'] = databases;
        this['hosts'] = hosts;
    }
    public withName(name: string): UserForList {
        this['name'] = name;
        return this;
    }
    public withDatabases(databases: Array<DatabaseWithPrivilegeObject>): UserForList {
        this['databases'] = databases;
        return this;
    }
    public withHosts(hosts: Array<string>): UserForList {
        this['hosts'] = hosts;
        return this;
    }
}