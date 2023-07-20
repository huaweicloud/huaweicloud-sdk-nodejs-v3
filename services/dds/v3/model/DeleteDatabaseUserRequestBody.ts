

export class DeleteDatabaseUserRequestBody {
    private 'user_name'?: string;
    private 'db_name'?: string;
    public constructor(userName?: string, dbName?: string) { 
        this['user_name'] = userName;
        this['db_name'] = dbName;
    }
    public withUserName(userName: string): DeleteDatabaseUserRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDbName(dbName: string): DeleteDatabaseUserRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
}