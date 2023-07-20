import { VarsStructure } from './VarsStructure';


export class VarsStructurePrimitiveTypeHolder {
    private 'vars_structure'?: Array<VarsStructure>;
    public constructor() { 
    }
    public withVarsStructure(varsStructure: Array<VarsStructure>): VarsStructurePrimitiveTypeHolder {
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