import { VarsStructure } from './VarsStructure';


export class UpdateOrgConformancePackRequestBody {
    public name?: string;
    private 'excluded_accounts'?: Array<string>;
    private 'vars_structure'?: Array<VarsStructure>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateOrgConformancePackRequestBody {
        this['name'] = name;
        return this;
    }
    public withExcludedAccounts(excludedAccounts: Array<string>): UpdateOrgConformancePackRequestBody {
        this['excluded_accounts'] = excludedAccounts;
        return this;
    }
    public set excludedAccounts(excludedAccounts: Array<string>  | undefined) {
        this['excluded_accounts'] = excludedAccounts;
    }
    public get excludedAccounts(): Array<string> | undefined {
        return this['excluded_accounts'];
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): UpdateOrgConformancePackRequestBody {
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