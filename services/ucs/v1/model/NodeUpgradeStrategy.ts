import { RollingUpdateNodeUpgradeStrategy } from './RollingUpdateNodeUpgradeStrategy';


export class NodeUpgradeStrategy {
    public type?: string;
    public rollingUpdate?: RollingUpdateNodeUpgradeStrategy;
    public constructor() { 
    }
    public withType(type: string): NodeUpgradeStrategy {
        this['type'] = type;
        return this;
    }
    public withRollingUpdate(rollingUpdate: RollingUpdateNodeUpgradeStrategy): NodeUpgradeStrategy {
        this['rollingUpdate'] = rollingUpdate;
        return this;
    }
}