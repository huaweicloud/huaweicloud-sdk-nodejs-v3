

export class TemplateURIPrimitiveTypeHolder {
    private 'template_uri'?: string | undefined;
    public constructor() { 
    }
    public withTemplateUri(templateUri: string): TemplateURIPrimitiveTypeHolder {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri() {
        return this['template_uri'];
    }
}