import { UpdateAuthenticationTemplateBody } from './UpdateAuthenticationTemplateBody';


export class UpdateAuthenticationTemplate {
    public description?: string;
    public status?: string;
    private 'template_body'?: UpdateAuthenticationTemplateBody;
    public constructor() { 
    }
    public withDescription(description: string): UpdateAuthenticationTemplate {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): UpdateAuthenticationTemplate {
        this['status'] = status;
        return this;
    }
    public withTemplateBody(templateBody: UpdateAuthenticationTemplateBody): UpdateAuthenticationTemplate {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: UpdateAuthenticationTemplateBody  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): UpdateAuthenticationTemplateBody | undefined {
        return this['template_body'];
    }
}