

export class FlinkTemplate {
    private 'template_id'?: number;
    public name?: string;
    public desc?: string;
    private 'create_time'?: number;
    private 'job_type'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: number): FlinkTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withName(name: string): FlinkTemplate {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): FlinkTemplate {
        this['desc'] = desc;
        return this;
    }
    public withCreateTime(createTime: number): FlinkTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withJobType(jobType: string): FlinkTemplate {
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