

export class TaskRulesetInfo {
    private 'template_id'?: string;
    public language?: string;
    private 'template_name'?: string;
    public type?: string;
    public status?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): TaskRulesetInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withLanguage(language: string): TaskRulesetInfo {
        this['language'] = language;
        return this;
    }
    public withTemplateName(templateName: string): TaskRulesetInfo {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withType(type: string): TaskRulesetInfo {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): TaskRulesetInfo {
        this['status'] = status;
        return this;
    }
}