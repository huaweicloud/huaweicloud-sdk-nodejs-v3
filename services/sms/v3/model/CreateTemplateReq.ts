import { TemplateRequest } from './TemplateRequest';


export class CreateTemplateReq {
    public template: TemplateRequest;
    public constructor(template?: any) { 
        this['template'] = template;
    }
    public withTemplate(template: TemplateRequest): CreateTemplateReq {
        this['template'] = template;
        return this;
    }
}