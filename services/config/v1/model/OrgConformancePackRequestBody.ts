import { VarsStructure } from './VarsStructure';


export class OrgConformancePackRequestBody {
    public name?: string;
    private 'excluded_accounts'?: Array<string>;
    private 'template_key'?: string;
    private 'template_body'?: string;
    private 'template_uri'?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): OrgConformancePackRequestBody {
        this['name'] = name;
        return this;
    }
    public withExcludedAccounts(excludedAccounts: Array<string>): OrgConformancePackRequestBody {
        this['excluded_accounts'] = excludedAccounts;
        return this;
    }
    public set excludedAccounts(excludedAccounts: Array<string>  | undefined) {
        this['excluded_accounts'] = excludedAccounts;
    }
    public get excludedAccounts(): Array<string> | undefined {
        return this['excluded_accounts'];
    }
    public withTemplateKey(templateKey: string): OrgConformancePackRequestBody {
        this['template_key'] = templateKey;
        return this;
    }
    public set templateKey(templateKey: string  | undefined) {
        this['template_key'] = templateKey;
    }
    public get templateKey(): string | undefined {
        return this['template_key'];
    }
    public withTemplateBody(templateBody: string): OrgConformancePackRequestBody {
        this['template_body'] = templateBody;
        return this;
    }
    public set templateBody(templateBody: string  | undefined) {
        this['template_body'] = templateBody;
    }
    public get templateBody(): string | undefined {
        return this['template_body'];
    }
    public withTemplateUri(templateUri: string): OrgConformancePackRequestBody {
        this['template_uri'] = templateUri;
        return this;
    }
    public set templateUri(templateUri: string  | undefined) {
        this['template_uri'] = templateUri;
    }
    public get templateUri(): string | undefined {
        return this['template_uri'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): OrgConformancePackRequestBody {
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