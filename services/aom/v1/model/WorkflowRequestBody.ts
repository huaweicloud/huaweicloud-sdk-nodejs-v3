

export class WorkflowRequestBody {
    public name?: string;
    public type?: string;
    public description?: string;
    public tags?: object;
    private 'template_name'?: string;
    private 'template_id'?: string;
    public input?: { [key: string]: object; };
    public quote?: Array<string>;
    private 'job_name'?: string;
    private 'job_id'?: string;
    private 'service_scenario'?: string;
    private 'service_name'?: string;
    private 'task_type'?: string;
    public constructor(name?: string, type?: string, templateId?: string, input?: { [key: string]: object; }, taskType?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['template_id'] = templateId;
        this['input'] = input;
        this['task_type'] = taskType;
    }
    public withName(name: string): WorkflowRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: string): WorkflowRequestBody {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): WorkflowRequestBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: object): WorkflowRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTemplateName(templateName: string): WorkflowRequestBody {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateId(templateId: string): WorkflowRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withInput(input: { [key: string]: object; }): WorkflowRequestBody {
        this['input'] = input;
        return this;
    }
    public withQuote(quote: Array<string>): WorkflowRequestBody {
        this['quote'] = quote;
        return this;
    }
    public withJobName(jobName: string): WorkflowRequestBody {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): WorkflowRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withServiceScenario(serviceScenario: string): WorkflowRequestBody {
        this['service_scenario'] = serviceScenario;
        return this;
    }
    public set serviceScenario(serviceScenario: string  | undefined) {
        this['service_scenario'] = serviceScenario;
    }
    public get serviceScenario(): string | undefined {
        return this['service_scenario'];
    }
    public withServiceName(serviceName: string): WorkflowRequestBody {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withTaskType(taskType: string): WorkflowRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}