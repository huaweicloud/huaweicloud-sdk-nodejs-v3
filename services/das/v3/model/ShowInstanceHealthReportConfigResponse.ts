
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceHealthReportConfigResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'template_id'?: number;
    private 'template_name'?: string;
    public system?: boolean;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowInstanceHealthReportConfigResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTemplateId(templateId: number): ShowInstanceHealthReportConfigResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowInstanceHealthReportConfigResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withSystem(system: boolean): ShowInstanceHealthReportConfigResponse {
        this['system'] = system;
        return this;
    }
}