

export class ParseTemplateVariablesRequestBody {
    private 'template_body'?: string | undefined;
    private 'template_uri'?: string | undefined;
    public constructor() { 
    }
    public withTemplateBody(templateBody: string): ParseTemplateVariablesRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody() {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): ParseTemplateVariablesRequestBody {
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