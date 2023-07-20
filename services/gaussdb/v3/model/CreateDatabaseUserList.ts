import { CreateDatabaseList } from './CreateDatabaseList';


export class CreateDatabaseUserList {
    public name?: string;
    public comment?: string;
    public password?: string;
    public hosts?: Array<string>;
    public databases?: Array<CreateDatabaseList>;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): CreateDatabaseUserList {
        this['name'] = name;
        return this;
    }
    public withComment(comment: string): CreateDatabaseUserList {
        this['comment'] = comment;
        return this;
    }
    public withPassword(password: string): CreateDatabaseUserList {
        this['password'] = password;
        return this;
    }
    public withHosts(hosts: Array<string>): CreateDatabaseUserList {
        this['hosts'] = hosts;
        return this;
    }
    public withDatabases(databases: Array<CreateDatabaseList>): CreateDatabaseUserList {
        this['databases'] = databases;
        return this;
    }
}