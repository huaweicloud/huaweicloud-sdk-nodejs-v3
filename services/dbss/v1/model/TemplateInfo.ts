import { TemplateBean } from './TemplateBean';


export class TemplateInfo {
    public template?: TemplateBean;
    public constructor() { 
    }
    public withTemplate(template: TemplateBean): TemplateInfo {
        this['template'] = template;
        return this;
    }
}