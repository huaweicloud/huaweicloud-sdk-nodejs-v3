import { FieldModel } from './FieldModel';


export class StructConfig {
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: StructConfigTemplateTypeEnum | string;
    private 'demo_fields'?: Array<FieldModel>;
    private 'tag_fields'?: Array<FieldModel>;
    private 'quick_analysis'?: boolean;
    public constructor(logGroupId?: string, logStreamId?: string, templateId?: string, templateName?: string, templateType?: string) { 
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
    }
    public withLogGroupId(logGroupId: string): StructConfig {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): StructConfig {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withTemplateId(templateId: string): StructConfig {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): StructConfig {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: StructConfigTemplateTypeEnum | string): StructConfig {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: StructConfigTemplateTypeEnum | string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): StructConfigTemplateTypeEnum | string | undefined {
        return this['template_type'];
    }
    public withDemoFields(demoFields: Array<FieldModel>): StructConfig {
        this['demo_fields'] = demoFields;
        return this;
    }
    public set demoFields(demoFields: Array<FieldModel>  | undefined) {
        this['demo_fields'] = demoFields;
    }
    public get demoFields(): Array<FieldModel> | undefined {
        return this['demo_fields'];
    }
    public withTagFields(tagFields: Array<FieldModel>): StructConfig {
        this['tag_fields'] = tagFields;
        return this;
    }
    public set tagFields(tagFields: Array<FieldModel>  | undefined) {
        this['tag_fields'] = tagFields;
    }
    public get tagFields(): Array<FieldModel> | undefined {
        return this['tag_fields'];
    }
    public withQuickAnalysis(quickAnalysis: boolean): StructConfig {
        this['quick_analysis'] = quickAnalysis;
        return this;
    }
    public set quickAnalysis(quickAnalysis: boolean  | undefined) {
        this['quick_analysis'] = quickAnalysis;
    }
    public get quickAnalysis(): boolean | undefined {
        return this['quick_analysis'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StructConfigTemplateTypeEnum {
    BUILT_IN = 'built_in',
    CUSTOM = 'custom'
}
