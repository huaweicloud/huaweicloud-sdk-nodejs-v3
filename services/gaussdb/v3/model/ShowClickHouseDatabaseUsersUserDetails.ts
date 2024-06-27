

export class ShowClickHouseDatabaseUsersUserDetails {
    private 'user_name'?: string;
    public databases?: Array<string>;
    public dml?: number;
    public ddl?: number;
    public constructor(userName?: string, databases?: Array<string>, dml?: number, ddl?: number) { 
        this['user_name'] = userName;
        this['databases'] = databases;
        this['dml'] = dml;
        this['ddl'] = ddl;
    }
    public withUserName(userName: string): ShowClickHouseDatabaseUsersUserDetails {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabases(databases: Array<string>): ShowClickHouseDatabaseUsersUserDetails {
        this['databases'] = databases;
        return this;
    }
    public withDml(dml: number): ShowClickHouseDatabaseUsersUserDetails {
        this['dml'] = dml;
        return this;
    }
    public withDdl(ddl: number): ShowClickHouseDatabaseUsersUserDetails {
        this['ddl'] = ddl;
        return this;
    }
}