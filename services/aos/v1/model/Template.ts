import { BaseTemplate } from './BaseTemplate';


export class Template {
    private 'template_id': string | undefined;
    private 'template_name': string | undefined;
    private 'template_description'?: string | undefined;
    private 'create_time': string | undefined;
    private 'update_time': string | undefined;
    private 'latest_version_id': string | undefined;
    private 'latest_version_description': string | undefined;
    public constructor(templateId?: any, templateName?: any, createTime?: any, updateTime?: any, latestVersionId?: any, latestVersionDescription?: any) { 
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
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): Template {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): Template {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription() {
        return this['template_description'];
    }
    public withCreateTime(createTime: string): Template {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Template {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withLatestVersionId(latestVersionId: string): Template {
        this['latest_version_id'] = latestVersionId;
        return this;
    }
    public set latestVersionId(latestVersionId: string | undefined) {
        this['latest_version_id'] = latestVersionId;
    }
    public get latestVersionId() {
        return this['latest_version_id'];
    }
    public withLatestVersionDescription(latestVersionDescription: string): Template {
        this['latest_version_description'] = latestVersionDescription;
        return this;
    }
    public set latestVersionDescription(latestVersionDescription: string | undefined) {
        this['latest_version_description'] = latestVersionDescription;
    }
    public get latestVersionDescription() {
        return this['latest_version_description'];
    }
}