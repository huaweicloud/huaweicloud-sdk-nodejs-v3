

export class ShowRestoreAvailableTablesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'restore_time'?: string;
    private 'last_table_info'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    public constructor(instanceId?: string, restoreTime?: string, lastTableInfo?: string) { 
        this['instance_id'] = instanceId;
        this['restore_time'] = restoreTime;
        this['last_table_info'] = lastTableInfo;
    }
    public withXLanguage(xLanguage: string): ShowRestoreAvailableTablesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowRestoreAvailableTablesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRestoreTime(restoreTime: string): ShowRestoreAvailableTablesRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withLastTableInfo(lastTableInfo: string): ShowRestoreAvailableTablesRequest {
        this['last_table_info'] = lastTableInfo;
        return this;
    }
    public set lastTableInfo(lastTableInfo: string  | undefined) {
        this['last_table_info'] = lastTableInfo;
    }
    public get lastTableInfo(): string | undefined {
        return this['last_table_info'];
    }
    public withDatabaseName(databaseName: string): ShowRestoreAvailableTablesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ShowRestoreAvailableTablesRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}