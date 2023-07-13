import { SmsTemplateVariableAttrReq } from './SmsTemplateVariableAttrReq';


export class SmsTemplateReq {
    private 'app_id': string | undefined;
    public brackets?: string;
    public region: string;
    private 'send_country'?: Array<number> | undefined;
    private 'sign_id'?: string | undefined;
    private 'template_content': string | undefined;
    private 'template_desc'?: string | undefined;
    private 'template_name': string | undefined;
    private 'template_type': string | undefined;
    private 'universal_template'?: number | undefined;
    private 'variable_attributes'?: Array<SmsTemplateVariableAttrReq> | undefined;
    public constructor(appId?: any, region?: any, templateContent?: any, templateName?: any, templateType?: any) { 
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
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
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
    public set sendCountry(sendCountry: Array<number> | undefined) {
        this['send_country'] = sendCountry;
    }
    public get sendCountry() {
        return this['send_country'];
    }
    public withSignId(signId: string): SmsTemplateReq {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string | undefined) {
        this['sign_id'] = signId;
    }
    public get signId() {
        return this['sign_id'];
    }
    public withTemplateContent(templateContent: string): SmsTemplateReq {
        this['template_content'] = templateContent;
        return this;
    }
    public set templateContent(templateContent: string | undefined) {
        this['template_content'] = templateContent;
    }
    public get templateContent() {
        return this['template_content'];
    }
    public withTemplateDesc(templateDesc: string): SmsTemplateReq {
        this['template_desc'] = templateDesc;
        return this;
    }
    public set templateDesc(templateDesc: string | undefined) {
        this['template_desc'] = templateDesc;
    }
    public get templateDesc() {
        return this['template_desc'];
    }
    public withTemplateName(templateName: string): SmsTemplateReq {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): SmsTemplateReq {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType() {
        return this['template_type'];
    }
    public withUniversalTemplate(universalTemplate: number): SmsTemplateReq {
        this['universal_template'] = universalTemplate;
        return this;
    }
    public set universalTemplate(universalTemplate: number | undefined) {
        this['universal_template'] = universalTemplate;
    }
    public get universalTemplate() {
        return this['universal_template'];
    }
    public withVariableAttributes(variableAttributes: Array<SmsTemplateVariableAttrReq>): SmsTemplateReq {
        this['variable_attributes'] = variableAttributes;
        return this;
    }
    public set variableAttributes(variableAttributes: Array<SmsTemplateVariableAttrReq> | undefined) {
        this['variable_attributes'] = variableAttributes;
    }
    public get variableAttributes() {
        return this['variable_attributes'];
    }
}