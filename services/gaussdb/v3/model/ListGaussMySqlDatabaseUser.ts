import { ListGaussMySqlDatabase } from './ListGaussMySqlDatabase';


export class ListGaussMySqlDatabaseUser {
    public name?: string;
    public host?: string;
    public comment?: string;
    public databases?: Array<ListGaussMySqlDatabase>;
    public constructor() { 
    }
    public withName(name: string): ListGaussMySqlDatabaseUser {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): ListGaussMySqlDatabaseUser {
        this['host'] = host;
        return this;
    }
    public withComment(comment: string): ListGaussMySqlDatabaseUser {
        this['comment'] = comment;
        return this;
    }
    public withDatabases(databases: Array<ListGaussMySqlDatabase>): ListGaussMySqlDatabaseUser {
        this['databases'] = databases;
        return this;
    }
}