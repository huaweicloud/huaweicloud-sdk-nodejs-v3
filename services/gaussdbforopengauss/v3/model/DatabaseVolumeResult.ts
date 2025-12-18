

export class DatabaseVolumeResult {
    private 'database_name'?: string;
    private 'table_space_name'?: string;
    private 'user_name'?: string;
    private 'database_size'?: string;
    public constructor() { 
    }
    public withDatabaseName(databaseName: string): DatabaseVolumeResult {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableSpaceName(tableSpaceName: string): DatabaseVolumeResult {
        this['table_space_name'] = tableSpaceName;
        return this;
    }
    public set tableSpaceName(tableSpaceName: string  | undefined) {
        this['table_space_name'] = tableSpaceName;
    }
    public get tableSpaceName(): string | undefined {
        return this['table_space_name'];
    }
    public withUserName(userName: string): DatabaseVolumeResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabaseSize(databaseSize: string): DatabaseVolumeResult {
        this['database_size'] = databaseSize;
        return this;
    }
    public set databaseSize(databaseSize: string  | undefined) {
        this['database_size'] = databaseSize;
    }
    public get databaseSize(): string | undefined {
        return this['database_size'];
    }
}