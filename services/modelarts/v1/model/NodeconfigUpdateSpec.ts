import { NodeconfigUpdateSpecConfigs } from './NodeconfigUpdateSpecConfigs';


export class NodeconfigUpdateSpec {
    public configs?: NodeconfigUpdateSpecConfigs;
    public constructor() { 
    }
    public withConfigs(configs: NodeconfigUpdateSpecConfigs): NodeconfigUpdateSpec {
        this['configs'] = configs;
        return this;
    }
}