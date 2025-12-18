import { NodePoolUpgradeSpec } from './NodePoolUpgradeSpec';


export class UpgradeNodePool {
    public spec?: NodePoolUpgradeSpec;
    public constructor(spec?: NodePoolUpgradeSpec) { 
        this['spec'] = spec;
    }
    public withSpec(spec: NodePoolUpgradeSpec): UpgradeNodePool {
        this['spec'] = spec;
        return this;
    }
}