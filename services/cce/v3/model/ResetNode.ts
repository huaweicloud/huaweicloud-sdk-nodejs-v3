import { ReinstallNodeSpec } from './ReinstallNodeSpec';


export class ResetNode {
    public nodeID?: string;
    public spec?: ReinstallNodeSpec;
    public constructor(nodeID?: string, spec?: ReinstallNodeSpec) { 
        this['nodeID'] = nodeID;
        this['spec'] = spec;
    }
    public withNodeID(nodeID: string): ResetNode {
        this['nodeID'] = nodeID;
        return this;
    }
    public withSpec(spec: ReinstallNodeSpec): ResetNode {
        this['spec'] = spec;
        return this;
    }
}