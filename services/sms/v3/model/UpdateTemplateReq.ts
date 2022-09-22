import { TemplateRequest } from './TemplateRequest';


export class UpdateTemplateReq {
    public template?: TemplateRequest;
    public constructor() { 
    }
    public withTemplate(template: TemplateRequest): UpdateTemplateReq {
        this['template'] = template;
        return this;
    }
}