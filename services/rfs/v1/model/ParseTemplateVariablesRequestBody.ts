import { TemplateBodyPrimitiveTypeHolder } from './TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './TemplateURIPrimitiveTypeHolder';


export class ParseTemplateVariablesRequestBody {
    private 'template_body'?: string;
    private 'template_uri'?: string;
    public constructor() { 
    }
    public withTemplateBody(templateBody: string): ParseTemplateVariablesRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): ParseTemplateVariablesRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
}