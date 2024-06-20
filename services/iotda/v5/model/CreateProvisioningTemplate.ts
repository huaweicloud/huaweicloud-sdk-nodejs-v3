import { ProvisioningTemplateBody } from './ProvisioningTemplateBody';


export class CreateProvisioningTemplate {
    private 'template_name'?: string;
    public description?: string;
    private 'template_body'?: ProvisioningTemplateBody;
    public constructor(templateName?: string, templateBody?: ProvisioningTemplateBody) { 
        this['template_name'] = templateName;
        this['template_body'] = templateBody;
    }
    public withTemplateName(templateName: string): CreateProvisioningTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): CreateProvisioningTemplate {
        this['description'] = description;
        return this;
    }
    public withTemplateBody(templateBody: ProvisioningTemplateBody): CreateProvisioningTemplate {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: ProvisioningTemplateBody  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): ProvisioningTemplateBody | undefined {
        return this['template_body'];
    }
}