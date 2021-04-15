import { NicSpec } from './NicSpec';


export class NodeNicSpec {
    public extNics?: Array<NicSpec>;
    public primaryNic?: NicSpec;
    public constructor() { 
    }
    public withExtNics(extNics: Array<NicSpec>): NodeNicSpec {
        this['extNics'] = extNics;
        return this;
    }
    public withPrimaryNic(primaryNic: NicSpec): NodeNicSpec {
        this['primaryNic'] = primaryNic;
        return this;
    }
}