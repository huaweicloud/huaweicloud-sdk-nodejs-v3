

export class ClickHouseDatabaseUserPSinfo {
    private 'user_name'?: string;
    public databases?: Array<string>;
    public dml?: number;
    public constructor(userName?: string, databases?: Array<string>, dml?: number) { 
        this['user_name'] = userName;
        this['databases'] = databases;
        this['dml'] = dml;
    }
    public withUserName(userName: string): ClickHouseDatabaseUserPSinfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabases(databases: Array<string>): ClickHouseDatabaseUserPSinfo {
        this['databases'] = databases;
        return this;
    }
    public withDml(dml: number): ClickHouseDatabaseUserPSinfo {
        this['dml'] = dml;
        return this;
    }
}