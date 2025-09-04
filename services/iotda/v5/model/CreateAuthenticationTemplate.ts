import { AuthenticationTemplateBody } from './AuthenticationTemplateBody';


export class CreateAuthenticationTemplate {
    private 'template_name'?: string;
    public description?: string;
    public status?: string;
    private 'template_body'?: AuthenticationTemplateBody;
    public constructor(templateName?: string, templateBody?: AuthenticationTemplateBody) { 
        this['template_name'] = templateName;
        this['template_body'] = templateBody;
    }
    public withTemplateName(templateName: string): CreateAuthenticationTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): CreateAuthenticationTemplate {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): CreateAuthenticationTemplate {
        this['status'] = status;
        return this;
    }
    public withTemplateBody(templateBody: AuthenticationTemplateBody): CreateAuthenticationTemplate {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: AuthenticationTemplateBody  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): AuthenticationTemplateBody | undefined {
        return this['template_body'];
    }
}