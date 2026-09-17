

export class ShowSlowLogDetailSampleRequest {
    private 'instance_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'db_name'?: string;
    private 'sql_template_id'?: string;
    private 'with_db'?: string;
    public constructor(instanceId?: string, startTime?: number, endTime?: number, sqlTemplateId?: string) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['sql_template_id'] = sqlTemplateId;
    }
    public withInstanceId(instanceId: string): ShowSlowLogDetailSampleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: number): ShowSlowLogDetailSampleRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowSlowLogDetailSampleRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDbName(dbName: string): ShowSlowLogDetailSampleRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSqlTemplateId(sqlTemplateId: string): ShowSlowLogDetailSampleRequest {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withWithDb(withDb: string): ShowSlowLogDetailSampleRequest {
        this['with_db'] = withDb;
        return this;
    }
    public set withDb(withDb: string  | undefined) {
        this['with_db'] = withDb;
    }
    public get withDb(): string | undefined {
        return this['with_db'];
    }
}