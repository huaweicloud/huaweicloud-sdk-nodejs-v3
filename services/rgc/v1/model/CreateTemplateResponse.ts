
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'template_version'?: string;
    private 'template_name'?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): CreateTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateVersion(templateVersion: string): CreateTemplateResponse {
        this['template_version'] = templateVersion;
        return this;
    }
    public set templateVersion(templateVersion: string  | undefined) {
        this['template_version'] = templateVersion;
    }
    public get templateVersion(): string | undefined {
        return this['template_version'];
    }
    public withTemplateName(templateName: string): CreateTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
}