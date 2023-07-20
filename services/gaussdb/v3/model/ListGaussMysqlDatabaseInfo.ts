import { GaussMySqlDatabaseInfo } from './GaussMySqlDatabaseInfo';


export class ListGaussMysqlDatabaseInfo {
    public name?: string;
    public charset?: string;
    public comment?: string;
    public users?: Array<GaussMySqlDatabaseInfo>;
    public constructor() { 
    }
    public withName(name: string): ListGaussMysqlDatabaseInfo {
        this['name'] = name;
        return this;
    }
    public withCharset(charset: string): ListGaussMysqlDatabaseInfo {
        this['charset'] = charset;
        return this;
    }
    public withComment(comment: string): ListGaussMysqlDatabaseInfo {
        this['comment'] = comment;
        return this;
    }
    public withUsers(users: Array<GaussMySqlDatabaseInfo>): ListGaussMysqlDatabaseInfo {
        this['users'] = users;
        return this;
    }
}