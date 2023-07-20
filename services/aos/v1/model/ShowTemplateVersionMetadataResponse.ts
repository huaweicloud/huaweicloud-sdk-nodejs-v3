import { BaseTemplateVersion } from './BaseTemplateVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateVersionMetadataResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'version_description'?: string;
    private 'create_time'?: string;
    public constructor(templateId?: string, templateName?: string, createTime?: string) { 
        super();
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['create_time'] = createTime;
    }
    public withTemplateId(templateId: string): ShowTemplateVersionMetadataResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowTemplateVersionMetadataResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withVersionDescription(versionDescription: string): ShowTemplateVersionMetadataResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withCreateTime(createTime: string): ShowTemplateVersionMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}