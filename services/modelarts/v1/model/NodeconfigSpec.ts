import { NodeconfigSpecConfigs } from './NodeconfigSpecConfigs';


export class NodeconfigSpec {
    public configs?: NodeconfigSpecConfigs;
    public constructor(configs?: NodeconfigSpecConfigs) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: NodeconfigSpecConfigs): NodeconfigSpec {
        this['configs'] = configs;
        return this;
    }
}