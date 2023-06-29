import { QueryTransTemplate } from './QueryTransTemplate';


export class TemplateInfo {
    private 'template_id'?: number | undefined;
    public template?: QueryTransTemplate;
    public constructor() { 
    }
    public withTemplateId(templateId: number): TemplateInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTemplate(template: QueryTransTemplate): TemplateInfo {
        this['template'] = template;
        return this;
    }
}