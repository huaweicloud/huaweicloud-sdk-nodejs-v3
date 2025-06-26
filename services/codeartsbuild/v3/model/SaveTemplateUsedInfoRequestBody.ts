

export class SaveTemplateUsedInfoRequestBody {
    private 'job_id'?: string;
    private 'template_id'?: string;
    public constructor(jobId?: string, templateId?: string) { 
        this['job_id'] = jobId;
        this['template_id'] = templateId;
    }
    public withJobId(jobId: string): SaveTemplateUsedInfoRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTemplateId(templateId: string): SaveTemplateUsedInfoRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}