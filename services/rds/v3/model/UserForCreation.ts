import { DatabaseWithPrivilegeObject } from './DatabaseWithPrivilegeObject';


export class UserForCreation {
    public name?: string;
    public password?: string;
    public comment?: string;
    public hosts?: Array<string>;
    public databases?: Array<DatabaseWithPrivilegeObject>;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): UserForCreation {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): UserForCreation {
        this['password'] = password;
        return this;
    }
    public withComment(comment: string): UserForCreation {
        this['comment'] = comment;
        return this;
    }
    public withHosts(hosts: Array<string>): UserForCreation {
        this['hosts'] = hosts;
        return this;
    }
    public withDatabases(databases: Array<DatabaseWithPrivilegeObject>): UserForCreation {
        this['databases'] = databases;
        return this;
    }
}