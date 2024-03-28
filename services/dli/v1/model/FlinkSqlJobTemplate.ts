

export class FlinkSqlJobTemplate {
    private 'template_id'?: number;
    public name?: string;
    public desc?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'sql_body'?: string;
    private 'job_type'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: number): FlinkSqlJobTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withName(name: string): FlinkSqlJobTemplate {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): FlinkSqlJobTemplate {
        this['desc'] = desc;
        return this;
    }
    public withCreateTime(createTime: number): FlinkSqlJobTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): FlinkSqlJobTemplate {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withSqlBody(sqlBody: string): FlinkSqlJobTemplate {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withJobType(jobType: string): FlinkSqlJobTemplate {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
}