import { NodeconfigUpdateSpec } from './NodeconfigUpdateSpec';


export class NodeconfigUpdate {
    public spec?: NodeconfigUpdateSpec;
    public constructor(spec?: NodeconfigUpdateSpec) { 
        this['spec'] = spec;
    }
    public withSpec(spec: NodeconfigUpdateSpec): NodeconfigUpdate {
        this['spec'] = spec;
        return this;
    }
}