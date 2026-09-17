

export class ShowFullSqlSampleRequest {
    private 'instance_id'?: string;
    private 'sql_template_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor(instanceId?: string, sqlTemplateId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['sql_template_id'] = sqlTemplateId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ShowFullSqlSampleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSqlTemplateId(sqlTemplateId: string): ShowFullSqlSampleRequest {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withStartAt(startAt: number): ShowFullSqlSampleRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowFullSqlSampleRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}