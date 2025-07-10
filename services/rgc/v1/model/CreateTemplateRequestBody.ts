

export class CreateTemplateRequestBody {
    private 'template_name'?: string;
    private 'template_type'?: CreateTemplateRequestBodyTemplateTypeEnum | string;
    private 'template_description'?: string;
    private 'template_body'?: string;
    public constructor(templateName?: string, templateType?: string) { 
        this['template_name'] = templateName;
        this['template_type'] = templateType;
    }
    public withTemplateName(templateName: string): CreateTemplateRequestBody {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: CreateTemplateRequestBodyTemplateTypeEnum | string): CreateTemplateRequestBody {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: CreateTemplateRequestBodyTemplateTypeEnum | string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): CreateTemplateRequestBodyTemplateTypeEnum | string | undefined {
        return this['template_type'];
    }
    public withTemplateDescription(templateDescription: string): CreateTemplateRequestBody {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withTemplateBody(templateBody: string): CreateTemplateRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTemplateRequestBodyTemplateTypeEnum {
    PREDEFINED = 'predefined',
    CUSTOMIZED = 'customized'
}
