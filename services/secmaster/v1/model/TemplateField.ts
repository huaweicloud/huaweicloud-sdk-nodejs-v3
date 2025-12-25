import { Restriction } from './Restriction';


export class TemplateField {
    private 'default_value'?: string;
    public description?: string;
    public example?: string;
    public name?: string;
    public required?: boolean;
    public restrictions?: Array<Restriction>;
    private 'template_field_id'?: string;
    public title?: string;
    public type?: string;
    public constructor() { 
    }
    public withDefaultValue(defaultValue: string): TemplateField {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withDescription(description: string): TemplateField {
        this['description'] = description;
        return this;
    }
    public withExample(example: string): TemplateField {
        this['example'] = example;
        return this;
    }
    public withName(name: string): TemplateField {
        this['name'] = name;
        return this;
    }
    public withRequired(required: boolean): TemplateField {
        this['required'] = required;
        return this;
    }
    public withRestrictions(restrictions: Array<Restriction>): TemplateField {
        this['restrictions'] = restrictions;
        return this;
    }
    public withTemplateFieldId(templateFieldId: string): TemplateField {
        this['template_field_id'] = templateFieldId;
        return this;
    }
    public set templateFieldId(templateFieldId: string  | undefined) {
        this['template_field_id'] = templateFieldId;
    }
    public get templateFieldId(): string | undefined {
        return this['template_field_id'];
    }
    public withTitle(title: string): TemplateField {
        this['title'] = title;
        return this;
    }
    public withType(type: string): TemplateField {
        this['type'] = type;
        return this;
    }
}