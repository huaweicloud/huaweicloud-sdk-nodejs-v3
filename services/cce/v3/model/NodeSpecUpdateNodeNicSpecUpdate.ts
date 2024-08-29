import { NodeSpecUpdateNodeNicSpecUpdatePrimaryNic } from './NodeSpecUpdateNodeNicSpecUpdatePrimaryNic';


export class NodeSpecUpdateNodeNicSpecUpdate {
    public primaryNic?: NodeSpecUpdateNodeNicSpecUpdatePrimaryNic;
    public constructor() { 
    }
    public withPrimaryNic(primaryNic: NodeSpecUpdateNodeNicSpecUpdatePrimaryNic): NodeSpecUpdateNodeNicSpecUpdate {
        this['primaryNic'] = primaryNic;
        return this;
    }
}