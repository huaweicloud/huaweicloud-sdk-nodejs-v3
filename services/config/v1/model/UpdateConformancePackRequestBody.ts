import { VarsStructure } from './VarsStructure';


export class UpdateConformancePackRequestBody {
    public name?: string;
    private 'vars_structure'?: Array<VarsStructure>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateConformancePackRequestBody {
        this['name'] = name;
        return this;
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): UpdateConformancePackRequestBody {
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