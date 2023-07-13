

export class BaseTemplateVersion {
    private 'template_id': string | undefined;
    private 'template_name': string | undefined;
    private 'version_description'?: string | undefined;
    private 'create_time': string | undefined;
    public constructor(templateId?: any, templateName?: any, createTime?: any) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['create_time'] = createTime;
    }
    public withTemplateId(templateId: string): BaseTemplateVersion {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): BaseTemplateVersion {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withVersionDescription(versionDescription: string): BaseTemplateVersion {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription() {
        return this['version_description'];
    }
    public withCreateTime(createTime: string): BaseTemplateVersion {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}