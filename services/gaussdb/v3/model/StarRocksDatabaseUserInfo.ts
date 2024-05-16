

export class StarRocksDatabaseUserInfo {
    private 'user_name'?: string;
    public password?: string;
    public databases?: Array<string>;
    public dml?: number;
    public ddl?: number;
    public constructor(userName?: string, password?: string, databases?: Array<string>) { 
        this['user_name'] = userName;
        this['password'] = password;
        this['databases'] = databases;
    }
    public withUserName(userName: string): StarRocksDatabaseUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): StarRocksDatabaseUserInfo {
        this['password'] = password;
        return this;
    }
    public withDatabases(databases: Array<string>): StarRocksDatabaseUserInfo {
        this['databases'] = databases;
        return this;
    }
    public withDml(dml: number): StarRocksDatabaseUserInfo {
        this['dml'] = dml;
        return this;
    }
    public withDdl(ddl: number): StarRocksDatabaseUserInfo {
        this['ddl'] = ddl;
        return this;
    }
}