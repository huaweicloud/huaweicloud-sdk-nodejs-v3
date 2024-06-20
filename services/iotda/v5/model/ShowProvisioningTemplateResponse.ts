import { ProvisioningTemplateBody } from './ProvisioningTemplateBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProvisioningTemplateResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'template_name'?: string;
    public description?: string;
    private 'template_body'?: ProvisioningTemplateBody;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowProvisioningTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowProvisioningTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): ShowProvisioningTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withTemplateBody(templateBody: ProvisioningTemplateBody): ShowProvisioningTemplateResponse {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: ProvisioningTemplateBody  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): ProvisioningTemplateBody | undefined {
        return this['template_body'];
    }
    public withCreateTime(createTime: string): ShowProvisioningTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowProvisioningTemplateResponse {
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