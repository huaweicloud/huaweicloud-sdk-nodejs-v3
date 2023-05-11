

export class ListTemplateDetailsRequest {
    private 'Content-Type': string | undefined;
    private 'app_key'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    private 'flow_status'?: string | undefined;
    private 'has_variable'?: string | undefined;
    public region?: string;
    private 'sign_name'?: string | undefined;
    private 'sort_dir'?: string | undefined;
    private 'sort_key'?: string | undefined;
    private 'template_id'?: string | undefined;
    private 'template_name'?: string | undefined;
    private 'template_type'?: string | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListTemplateDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withAppKey(appKey: string): ListTemplateDetailsRequest {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey() {
        return this['app_key'];
    }
    public withAppName(appName: string): ListTemplateDetailsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withStartTime(startTime: string): ListTemplateDetailsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTemplateDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ListTemplateDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTemplateDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withFlowStatus(flowStatus: string): ListTemplateDetailsRequest {
        this['flow_status'] = flowStatus;
        return this;
    }
    public set flowStatus(flowStatus: string | undefined) {
        this['flow_status'] = flowStatus;
    }
    public get flowStatus() {
        return this['flow_status'];
    }
    public withHasVariable(hasVariable: string): ListTemplateDetailsRequest {
        this['has_variable'] = hasVariable;
        return this;
    }
    public set hasVariable(hasVariable: string | undefined) {
        this['has_variable'] = hasVariable;
    }
    public get hasVariable() {
        return this['has_variable'];
    }
    public withRegion(region: string): ListTemplateDetailsRequest {
        this['region'] = region;
        return this;
    }
    public withSignName(signName: string): ListTemplateDetailsRequest {
        this['sign_name'] = signName;
        return this;
    }
    public set signName(signName: string | undefined) {
        this['sign_name'] = signName;
    }
    public get signName() {
        return this['sign_name'];
    }
    public withSortDir(sortDir: string): ListTemplateDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListTemplateDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withTemplateId(templateId: string): ListTemplateDetailsRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ListTemplateDetailsRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): ListTemplateDetailsRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType() {
        return this['template_type'];
    }
}