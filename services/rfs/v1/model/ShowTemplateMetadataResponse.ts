import { BaseTemplate } from './BaseTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateMetadataResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_description'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(templateId?: string, templateName?: string, createTime?: string, updateTime?: string) { 
        super();
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withTemplateId(templateId: string): ShowTemplateMetadataResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowTemplateMetadataResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): ShowTemplateMetadataResponse {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withCreateTime(createTime: string): ShowTemplateMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowTemplateMetadataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}