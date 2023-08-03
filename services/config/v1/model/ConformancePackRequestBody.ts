import { VarsStructure } from './VarsStructure';


export class ConformancePackRequestBody {
    public name?: string;
    private 'agency_name'?: string;
    private 'template_key'?: string;
    private 'template_body'?: string;
    private 'template_uri'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ConformancePackRequestBody {
        this['name'] = name;
        return this;
    }
    public withAgencyName(agencyName: string): ConformancePackRequestBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withTemplateKey(templateKey: string): ConformancePackRequestBody {
        this['template_key'] = templateKey;
        return this;
    }
    public set templateKey(templateKey: string  | undefined) {
        this['template_key'] = templateKey;
    }
    public get templateKey(): string | undefined {
        return this['template_key'];
    }
    public withTemplateBody(templateBody: string): ConformancePackRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): ConformancePackRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): ConformancePackRequestBody {
        this['vars_structure'] = varsStructure;
        return this;
    }
    public set varsStructure(varsStructure: Array<VarsStructure>  | undefined) {
        this['vars_structure'] = varsStructure;
    }
    public get varsStructure(): Array<VarsStructure> | undefined {
        return this['vars_structure'];
    }
}