

export class StarRocksDatabaseUserPSinfo {
    private 'user_name'?: string;
    public databases?: Array<string>;
    public dml?: number;
    public ddl?: number;
    public constructor(userName?: string) { 
        this['user_name'] = userName;
    }
    public withUserName(userName: string): StarRocksDatabaseUserPSinfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabases(databases: Array<string>): StarRocksDatabaseUserPSinfo {
        this['databases'] = databases;
        return this;
    }
    public withDml(dml: number): StarRocksDatabaseUserPSinfo {
        this['dml'] = dml;
        return this;
    }
    public withDdl(ddl: number): StarRocksDatabaseUserPSinfo {
        this['ddl'] = ddl;
        return this;
    }
}