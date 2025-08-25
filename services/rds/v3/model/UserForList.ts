import { DatabaseWithPrivilegeObject } from './DatabaseWithPrivilegeObject';


export class UserForList {
    public name?: string;
    public databases?: Array<DatabaseWithPrivilegeObject>;
    public hosts?: Array<string>;
    public comment?: string;
    public constructor(name?: string, databases?: Array<DatabaseWithPrivilegeObject>, hosts?: Array<string>, comment?: string) { 
        this['name'] = name;
        this['databases'] = databases;
        this['hosts'] = hosts;
        this['comment'] = comment;
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
    public withComment(comment: string): UserForList {
        this['comment'] = comment;
        return this;
    }
}