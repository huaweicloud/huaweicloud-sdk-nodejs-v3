

export class ClickHouseDatabaseUserInfo {
    private 'user_name'?: string;
    public password?: string;
    public databases?: Array<string>;
    public dml?: number;
    public constructor(userName?: string, password?: string, databases?: Array<string>) { 
        this['user_name'] = userName;
        this['password'] = password;
        this['databases'] = databases;
    }
    public withUserName(userName: string): ClickHouseDatabaseUserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): ClickHouseDatabaseUserInfo {
        this['password'] = password;
        return this;
    }
    public withDatabases(databases: Array<string>): ClickHouseDatabaseUserInfo {
        this['databases'] = databases;
        return this;
    }
    public withDml(dml: number): ClickHouseDatabaseUserInfo {
        this['dml'] = dml;
        return this;
    }
}