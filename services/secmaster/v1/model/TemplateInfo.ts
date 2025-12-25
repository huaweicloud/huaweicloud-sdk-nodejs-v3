

export class TemplateInfo {
    public id?: string;
    private 'component_id'?: string;
    private 'template_name'?: string;
    private 'task_config'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): TemplateInfo {
        this['id'] = id;
        return this;
    }
    public withComponentId(componentId: string): TemplateInfo {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withTemplateName(templateName: string): TemplateInfo {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTaskConfig(taskConfig: string): TemplateInfo {
        this['task_config'] = taskConfig;
        return this;
    }
    public set taskConfig(taskConfig: string  | undefined) {
        this['task_config'] = taskConfig;
    }
    public get taskConfig(): string | undefined {
        return this['task_config'];
    }
    public withCreateTime(createTime: string): TemplateInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): TemplateInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): TemplateInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}