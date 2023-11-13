

export class PostgreSQLHistoryDatabaseRequest {
    private 'instance_ids'?: Array<string>;
    private 'restore_time'?: number;
    private 'database_name_like'?: string;
    private 'instance_name_like'?: string;
    public constructor(instanceIds?: Array<string>, restoreTime?: number) { 
        this['instance_ids'] = instanceIds;
        this['restore_time'] = restoreTime;
    }
    public withInstanceIds(instanceIds: Array<string>): PostgreSQLHistoryDatabaseRequest {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withRestoreTime(restoreTime: number): PostgreSQLHistoryDatabaseRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withDatabaseNameLike(databaseNameLike: string): PostgreSQLHistoryDatabaseRequest {
        this['database_name_like'] = databaseNameLike;
        return this;
    }
    public set databaseNameLike(databaseNameLike: string  | undefined) {
        this['database_name_like'] = databaseNameLike;
    }
    public get databaseNameLike(): string | undefined {
        return this['database_name_like'];
    }
    public withInstanceNameLike(instanceNameLike: string): PostgreSQLHistoryDatabaseRequest {
        this['instance_name_like'] = instanceNameLike;
        return this;
    }
    public set instanceNameLike(instanceNameLike: string  | undefined) {
        this['instance_name_like'] = instanceNameLike;
    }
    public get instanceNameLike(): string | undefined {
        return this['instance_name_like'];
    }
}