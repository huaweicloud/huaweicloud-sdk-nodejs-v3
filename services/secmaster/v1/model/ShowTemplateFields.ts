import { TemplateField } from './TemplateField';


export class ShowTemplateFields {
    public fields?: Array<TemplateField>;
    private 'template_id'?: string;
    public constructor() { 
    }
    public withFields(fields: Array<TemplateField>): ShowTemplateFields {
        this['fields'] = fields;
        return this;
    }
    public withTemplateId(templateId: string): ShowTemplateFields {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}