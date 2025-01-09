import { SmsTemplateVariableAttrReq } from './SmsTemplateVariableAttrReq';


export class SmsTemplateReq {
    private 'app_id'?: string;
    public brackets?: string;
    public region?: string;
    private 'send_country'?: Array<number>;
    private 'sign_id'?: string;
    private 'template_content'?: string;
    private 'template_desc'?: string;
    private 'template_name'?: string;
    private 'template_type'?: string;
    private 'universal_template'?: number;
    private 'variable_attributes'?: Array<SmsTemplateVariableAttrReq>;
    private 'flow_status'?: string;
    public constructor(appId?: string, region?: string, templateContent?: string, templateName?: string, templateType?: string) { 
        this['app_id'] = appId;
        this['region'] = region;
        this['template_content'] = templateContent;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
    }
    public withAppId(appId: string): SmsTemplateReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBrackets(brackets: string): SmsTemplateReq {
        this['brackets'] = brackets;
        return this;
    }
    public withRegion(region: string): SmsTemplateReq {
        this['region'] = region;
        return this;
    }
    public withSendCountry(sendCountry: Array<number>): SmsTemplateReq {
        this['send_country'] = sendCountry;
        return this;
    }
    public set sendCountry(sendCountry: Array<number>  | undefined) {
        this['send_country'] = sendCountry;
    }
    public get sendCountry(): Array<number> | undefined {
        return this['send_country'];
    }
    public withSignId(signId: string): SmsTemplateReq {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
    public withTemplateContent(templateContent: string): SmsTemplateReq {
        this['template_content'] = templateContent;
        return this;
    }
    public set templateContent(templateContent: string  | undefined) {
        this['template_content'] = templateContent;
    }
    public get templateContent(): string | undefined {
        return this['template_content'];
    }
    public withTemplateDesc(templateDesc: string): SmsTemplateReq {
        this['template_desc'] = templateDesc;
        return this;
    }
    public set templateDesc(templateDesc: string  | undefined) {
        this['template_desc'] = templateDesc;
    }
    public get templateDesc(): string | undefined {
        return this['template_desc'];
    }
    public withTemplateName(templateName: string): SmsTemplateReq {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): SmsTemplateReq {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withUniversalTemplate(universalTemplate: number): SmsTemplateReq {
        this['universal_template'] = universalTemplate;
        return this;
    }
    public set universalTemplate(universalTemplate: number  | undefined) {
        this['universal_template'] = universalTemplate;
    }
    public get universalTemplate(): number | undefined {
        return this['universal_template'];
    }
    public withVariableAttributes(variableAttributes: Array<SmsTemplateVariableAttrReq>): SmsTemplateReq {
        this['variable_attributes'] = variableAttributes;
        return this;
    }
    public set variableAttributes(variableAttributes: Array<SmsTemplateVariableAttrReq>  | undefined) {
        this['variable_attributes'] = variableAttributes;
    }
    public get variableAttributes(): Array<SmsTemplateVariableAttrReq> | undefined {
        return this['variable_attributes'];
    }
    public withFlowStatus(flowStatus: string): SmsTemplateReq {
        this['flow_status'] = flowStatus;
        return this;
    }
    public set flowStatus(flowStatus: string  | undefined) {
        this['flow_status'] = flowStatus;
    }
    public get flowStatus(): string | undefined {
        return this['flow_status'];
    }
}