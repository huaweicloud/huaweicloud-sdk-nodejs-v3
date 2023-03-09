

export class BaseTemplate {
    private 'template_id': string | undefined;
    private 'template_name': string | undefined;
    private 'template_description'?: string | undefined;
    private 'create_time': string | undefined;
    private 'update_time': string | undefined;
    public constructor(templateId?: any, templateName?: any, createTime?: any, updateTime?: any) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withTemplateId(templateId: string): BaseTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): BaseTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): BaseTemplate {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription() {
        return this['template_description'];
    }
    public withCreateTime(createTime: string): BaseTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): BaseTemplate {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}