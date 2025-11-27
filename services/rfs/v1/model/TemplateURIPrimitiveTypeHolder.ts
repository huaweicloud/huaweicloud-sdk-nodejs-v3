

export class TemplateURIPrimitiveTypeHolder {
    private 'template_uri'?: string;
    public constructor() { 
    }
    public withTemplateUri(templateUri: string): TemplateURIPrimitiveTypeHolder {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
}