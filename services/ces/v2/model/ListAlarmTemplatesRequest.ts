

export class ListAlarmTemplatesRequest {
    public offset?: number;
    public limit?: number;
    public namespace?: string;
    private 'dim_name'?: string;
    private 'template_type'?: ListAlarmTemplatesRequestTemplateTypeEnum | string;
    private 'template_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListAlarmTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmTemplatesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withDimName(dimName: string): ListAlarmTemplatesRequest {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): string | undefined {
        return this['dim_name'];
    }
    public withTemplateType(templateType: ListAlarmTemplatesRequestTemplateTypeEnum | string): ListAlarmTemplatesRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: ListAlarmTemplatesRequestTemplateTypeEnum | string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): ListAlarmTemplatesRequestTemplateTypeEnum | string | undefined {
        return this['template_type'];
    }
    public withTemplateName(templateName: string): ListAlarmTemplatesRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmTemplatesRequestTemplateTypeEnum {
    SYSTEM = 'system',
    CUSTOM = 'custom'
}
