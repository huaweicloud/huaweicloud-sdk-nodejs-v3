import { AlarmTemplatePolicies } from './AlarmTemplatePolicies';
import { TemplateType } from './TemplateType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmTemplateResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: TemplateType;
    private 'create_time'?: Date;
    private 'template_description'?: string;
    public policies?: Array<AlarmTemplatePolicies>;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowAlarmTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ShowAlarmTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: TemplateType): ShowAlarmTemplateResponse {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: TemplateType  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): TemplateType | undefined {
        return this['template_type'];
    }
    public withCreateTime(createTime: Date): ShowAlarmTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withTemplateDescription(templateDescription: string): ShowAlarmTemplateResponse {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withPolicies(policies: Array<AlarmTemplatePolicies>): ShowAlarmTemplateResponse {
        this['policies'] = policies;
        return this;
    }
}