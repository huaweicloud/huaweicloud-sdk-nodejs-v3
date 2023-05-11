import { TenantBasic } from './TenantBasic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateResponse extends SdkResponse {
    public id?: string;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    private 'customer_id'?: string | undefined;
    public tenant?: TenantBasic;
    private 'template_name'?: string | undefined;
    private 'template_id'?: string | undefined;
    private 'template_type'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'app_key'?: string | undefined;
    private 'sign_id'?: string | undefined;
    private 'template_content'?: string | undefined;
    private 'has_variable'?: string | undefined;
    private 'template_desc'?: string | undefined;
    private 'review_desc'?: string | undefined;
    private 'review_order'?: string | undefined;
    private 'flow_status'?: string | undefined;
    private 'universal_template'?: number | undefined;
    public status?: string;
    public region?: string;
    public brackets?: string;
    public site?: string;
    private 'urge_status'?: string | undefined;
    private 'urge_time'?: string | undefined;
    private 'urge_desc'?: string | undefined;
    private 'send_country1'?: number | undefined;
    private 'send_country2'?: number | undefined;
    private 'send_country3'?: number | undefined;
    private 'is_support_multiomp'?: boolean | undefined;
    private 'country_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): ShowTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowTemplateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withCustomerId(customerId: string): ShowTemplateResponse {
        this['customer_id'] = customerId;
        return this;
    }
    public set customerId(customerId: string | undefined) {
        this['customer_id'] = customerId;
    }
    public get customerId() {
        return this['customer_id'];
    }
    public withTenant(tenant: TenantBasic): ShowTemplateResponse {
        this['tenant'] = tenant;
        return this;
    }
    public withTemplateName(templateName: string): ShowTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateId(templateId: string): ShowTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateType(templateType: string): ShowTemplateResponse {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType() {
        return this['template_type'];
    }
    public withAppName(appName: string): ShowTemplateResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withAppKey(appKey: string): ShowTemplateResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey() {
        return this['app_key'];
    }
    public withSignId(signId: string): ShowTemplateResponse {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string | undefined) {
        this['sign_id'] = signId;
    }
    public get signId() {
        return this['sign_id'];
    }
    public withTemplateContent(templateContent: string): ShowTemplateResponse {
        this['template_content'] = templateContent;
        return this;
    }
    public set templateContent(templateContent: string | undefined) {
        this['template_content'] = templateContent;
    }
    public get templateContent() {
        return this['template_content'];
    }
    public withHasVariable(hasVariable: string): ShowTemplateResponse {
        this['has_variable'] = hasVariable;
        return this;
    }
    public set hasVariable(hasVariable: string | undefined) {
        this['has_variable'] = hasVariable;
    }
    public get hasVariable() {
        return this['has_variable'];
    }
    public withTemplateDesc(templateDesc: string): ShowTemplateResponse {
        this['template_desc'] = templateDesc;
        return this;
    }
    public set templateDesc(templateDesc: string | undefined) {
        this['template_desc'] = templateDesc;
    }
    public get templateDesc() {
        return this['template_desc'];
    }
    public withReviewDesc(reviewDesc: string): ShowTemplateResponse {
        this['review_desc'] = reviewDesc;
        return this;
    }
    public set reviewDesc(reviewDesc: string | undefined) {
        this['review_desc'] = reviewDesc;
    }
    public get reviewDesc() {
        return this['review_desc'];
    }
    public withReviewOrder(reviewOrder: string): ShowTemplateResponse {
        this['review_order'] = reviewOrder;
        return this;
    }
    public set reviewOrder(reviewOrder: string | undefined) {
        this['review_order'] = reviewOrder;
    }
    public get reviewOrder() {
        return this['review_order'];
    }
    public withFlowStatus(flowStatus: string): ShowTemplateResponse {
        this['flow_status'] = flowStatus;
        return this;
    }
    public set flowStatus(flowStatus: string | undefined) {
        this['flow_status'] = flowStatus;
    }
    public get flowStatus() {
        return this['flow_status'];
    }
    public withUniversalTemplate(universalTemplate: number): ShowTemplateResponse {
        this['universal_template'] = universalTemplate;
        return this;
    }
    public set universalTemplate(universalTemplate: number | undefined) {
        this['universal_template'] = universalTemplate;
    }
    public get universalTemplate() {
        return this['universal_template'];
    }
    public withStatus(status: string): ShowTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): ShowTemplateResponse {
        this['region'] = region;
        return this;
    }
    public withBrackets(brackets: string): ShowTemplateResponse {
        this['brackets'] = brackets;
        return this;
    }
    public withSite(site: string): ShowTemplateResponse {
        this['site'] = site;
        return this;
    }
    public withUrgeStatus(urgeStatus: string): ShowTemplateResponse {
        this['urge_status'] = urgeStatus;
        return this;
    }
    public set urgeStatus(urgeStatus: string | undefined) {
        this['urge_status'] = urgeStatus;
    }
    public get urgeStatus() {
        return this['urge_status'];
    }
    public withUrgeTime(urgeTime: string): ShowTemplateResponse {
        this['urge_time'] = urgeTime;
        return this;
    }
    public set urgeTime(urgeTime: string | undefined) {
        this['urge_time'] = urgeTime;
    }
    public get urgeTime() {
        return this['urge_time'];
    }
    public withUrgeDesc(urgeDesc: string): ShowTemplateResponse {
        this['urge_desc'] = urgeDesc;
        return this;
    }
    public set urgeDesc(urgeDesc: string | undefined) {
        this['urge_desc'] = urgeDesc;
    }
    public get urgeDesc() {
        return this['urge_desc'];
    }
    public withSendCountry1(sendCountry1: number): ShowTemplateResponse {
        this['send_country1'] = sendCountry1;
        return this;
    }
    public set sendCountry1(sendCountry1: number | undefined) {
        this['send_country1'] = sendCountry1;
    }
    public get sendCountry1() {
        return this['send_country1'];
    }
    public withSendCountry2(sendCountry2: number): ShowTemplateResponse {
        this['send_country2'] = sendCountry2;
        return this;
    }
    public set sendCountry2(sendCountry2: number | undefined) {
        this['send_country2'] = sendCountry2;
    }
    public get sendCountry2() {
        return this['send_country2'];
    }
    public withSendCountry3(sendCountry3: number): ShowTemplateResponse {
        this['send_country3'] = sendCountry3;
        return this;
    }
    public set sendCountry3(sendCountry3: number | undefined) {
        this['send_country3'] = sendCountry3;
    }
    public get sendCountry3() {
        return this['send_country3'];
    }
    public withIsSupportMultiomp(isSupportMultiomp: boolean): ShowTemplateResponse {
        this['is_support_multiomp'] = isSupportMultiomp;
        return this;
    }
    public set isSupportMultiomp(isSupportMultiomp: boolean | undefined) {
        this['is_support_multiomp'] = isSupportMultiomp;
    }
    public get isSupportMultiomp() {
        return this['is_support_multiomp'];
    }
    public withCountryName(countryName: string): ShowTemplateResponse {
        this['country_name'] = countryName;
        return this;
    }
    public set countryName(countryName: string | undefined) {
        this['country_name'] = countryName;
    }
    public get countryName() {
        return this['country_name'];
    }
}