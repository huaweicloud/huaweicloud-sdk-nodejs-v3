

export class AuthenticationTemplateSimple {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public description?: string;
    public status?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): AuthenticationTemplateSimple {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): AuthenticationTemplateSimple {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withCreateTime(createTime: string): AuthenticationTemplateSimple {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): AuthenticationTemplateSimple {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): AuthenticationTemplateSimple {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): AuthenticationTemplateSimple {
        this['status'] = status;
        return this;
    }
}