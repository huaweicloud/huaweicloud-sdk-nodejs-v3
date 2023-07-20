

export class ListTablePrivilegesRequest {
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'user_name'?: string;
    public constructor(databaseName?: string, tableName?: string, userName?: string) { 
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
        this['user_name'] = userName;
    }
    public withDatabaseName(databaseName: string): ListTablePrivilegesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListTablePrivilegesRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserName(userName: string): ListTablePrivilegesRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}