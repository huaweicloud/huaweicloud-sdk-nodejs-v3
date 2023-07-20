

export class ListTemplateDetailsRequest {
    private 'Content-Type'?: string;
    private 'app_key'?: string;
    private 'app_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'flow_status'?: string;
    private 'has_variable'?: string;
    public region?: string;
    private 'sign_name'?: string;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListTemplateDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppKey(appKey: string): ListTemplateDetailsRequest {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppName(appName: string): ListTemplateDetailsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStartTime(startTime: string): ListTemplateDetailsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTemplateDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
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
    public set flowStatus(flowStatus: string  | undefined) {
        this['flow_status'] = flowStatus;
    }
    public get flowStatus(): string | undefined {
        return this['flow_status'];
    }
    public withHasVariable(hasVariable: string): ListTemplateDetailsRequest {
        this['has_variable'] = hasVariable;
        return this;
    }
    public set hasVariable(hasVariable: string  | undefined) {
        this['has_variable'] = hasVariable;
    }
    public get hasVariable(): string | undefined {
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
    public set signName(signName: string  | undefined) {
        this['sign_name'] = signName;
    }
    public get signName(): string | undefined {
        return this['sign_name'];
    }
    public withSortDir(sortDir: string): ListTemplateDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListTemplateDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withTemplateId(templateId: string): ListTemplateDetailsRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ListTemplateDetailsRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): ListTemplateDetailsRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
}