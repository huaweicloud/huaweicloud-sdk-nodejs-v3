import { TemplateParameterDefinition } from './TemplateParameterDefinition';


export class ConformancePackTemplate {
    public id?: string;
    private 'template_key'?: string;
    public description?: string;
    private 'template_body'?: string;
    public parameters?: { [key: string]: TemplateParameterDefinition; };
    public constructor() { 
    }
    public withId(id: string): ConformancePackTemplate {
        this['id'] = id;
        return this;
    }
    public withTemplateKey(templateKey: string): ConformancePackTemplate {
        this['template_key'] = templateKey;
        return this;
    }
    public set templateKey(templateKey: string  | undefined) {
        this['template_key'] = templateKey;
    }
    public get templateKey(): string | undefined {
        return this['template_key'];
    }
    public withDescription(description: string): ConformancePackTemplate {
        this['description'] = description;
        return this;
    }
    public withTemplateBody(templateBody: string): ConformancePackTemplate {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withParameters(parameters: { [key: string]: TemplateParameterDefinition; }): ConformancePackTemplate {
        this['parameters'] = parameters;
        return this;
    }
}