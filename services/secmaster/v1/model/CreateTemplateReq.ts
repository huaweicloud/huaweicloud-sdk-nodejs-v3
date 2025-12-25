

export class CreateTemplateReq {
    private 'component_id'?: string;
    private 'template_name'?: string;
    private 'task_config'?: string;
    public constructor(componentId?: string, templateName?: string, taskConfig?: string) { 
        this['component_id'] = componentId;
        this['template_name'] = templateName;
        this['task_config'] = taskConfig;
    }
    public withComponentId(componentId: string): CreateTemplateReq {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withTemplateName(templateName: string): CreateTemplateReq {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTaskConfig(taskConfig: string): CreateTemplateReq {
        this['task_config'] = taskConfig;
        return this;
    }
    public set taskConfig(taskConfig: string  | undefined) {
        this['task_config'] = taskConfig;
    }
    public get taskConfig(): string | undefined {
        return this['task_config'];
    }
}