

export class PredefinedTemplate {
    private 'template_name'?: string;
    private 'template_description'?: string;
    private 'template_category'?: string;
    public constructor() { 
    }
    public withTemplateName(templateName: string): PredefinedTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): PredefinedTemplate {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withTemplateCategory(templateCategory: string): PredefinedTemplate {
        this['template_category'] = templateCategory;
        return this;
    }
    public set templateCategory(templateCategory: string  | undefined) {
        this['template_category'] = templateCategory;
    }
    public get templateCategory(): string | undefined {
        return this['template_category'];
    }
}