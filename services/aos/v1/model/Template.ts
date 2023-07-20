import { BaseTemplate } from './BaseTemplate';


export class Template {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_description'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'latest_version_id'?: string;
    private 'latest_version_description'?: string;
    public constructor(templateId?: string, templateName?: string, createTime?: string, updateTime?: string, latestVersionId?: string, latestVersionDescription?: string) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['latest_version_id'] = latestVersionId;
        this['latest_version_description'] = latestVersionDescription;
    }
    public withTemplateId(templateId: string): Template {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): Template {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): Template {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withCreateTime(createTime: string): Template {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Template {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withLatestVersionId(latestVersionId: string): Template {
        this['latest_version_id'] = latestVersionId;
        return this;
    }
    public set latestVersionId(latestVersionId: string  | undefined) {
        this['latest_version_id'] = latestVersionId;
    }
    public get latestVersionId(): string | undefined {
        return this['latest_version_id'];
    }
    public withLatestVersionDescription(latestVersionDescription: string): Template {
        this['latest_version_description'] = latestVersionDescription;
        return this;
    }
    public set latestVersionDescription(latestVersionDescription: string  | undefined) {
        this['latest_version_description'] = latestVersionDescription;
    }
    public get latestVersionDescription(): string | undefined {
        return this['latest_version_description'];
    }
}