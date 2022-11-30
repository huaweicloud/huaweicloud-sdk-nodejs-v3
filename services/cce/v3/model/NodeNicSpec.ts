import { NicSpec } from './NicSpec';


export class NodeNicSpec {
    public primaryNic?: NicSpec;
    public extNics?: Array<NicSpec>;
    public constructor() { 
    }
    public withPrimaryNic(primaryNic: NicSpec): NodeNicSpec {
        this['primaryNic'] = primaryNic;
        return this;
    }
    public withExtNics(extNics: Array<NicSpec>): NodeNicSpec {
        this['extNics'] = extNics;
        return this;
    }
}