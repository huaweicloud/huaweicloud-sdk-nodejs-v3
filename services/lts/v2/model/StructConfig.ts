

export class StructConfig {
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: StructConfigTemplateTypeEnum | string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum StructConfigTemplateTypeEnum {
    BUILT_IN = 'built_in',
    CUSTOM = 'custom'
}
