

export class UpdateTemplateMetadataRequestBody {
    private 'template_id'?: string;
    private 'template_description'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): UpdateTemplateMetadataRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateDescription(templateDescription: string): UpdateTemplateMetadataRequestBody {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
}