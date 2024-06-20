import { ProvisioningTemplateBody } from './ProvisioningTemplateBody';


export class UpdateProvisioningTemplate {
    public description?: string;
    private 'template_body'?: ProvisioningTemplateBody;
    public constructor() { 
    }
    public withDescription(description: string): UpdateProvisioningTemplate {
        this['description'] = description;
        return this;
    }
    public withTemplateBody(templateBody: ProvisioningTemplateBody): UpdateProvisioningTemplate {
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