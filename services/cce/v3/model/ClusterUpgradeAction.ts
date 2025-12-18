import { NodePriority } from './NodePriority';
import { UpgradeAddonConfig } from './UpgradeAddonConfig';
import { UpgradeStrategy } from './UpgradeStrategy';


export class ClusterUpgradeAction {
    public addons?: Array<UpgradeAddonConfig>;
    public nodeOrder?: { [key: string]: Array<NodePriority>; };
    public nodePoolOrder?: { [key: string]: number; };
    public strategy?: UpgradeStrategy;
    public targetVersion?: string;
    public constructor(strategy?: UpgradeStrategy, targetVersion?: string) { 
        this['strategy'] = strategy;
        this['targetVersion'] = targetVersion;
    }
    public withAddons(addons: Array<UpgradeAddonConfig>): ClusterUpgradeAction {
        this['addons'] = addons;
        return this;
    }
    public withNodeOrder(nodeOrder: { [key: string]: Array<NodePriority>; }): ClusterUpgradeAction {
        this['nodeOrder'] = nodeOrder;
        return this;
    }
    public withNodePoolOrder(nodePoolOrder: { [key: string]: number; }): ClusterUpgradeAction {
        this['nodePoolOrder'] = nodePoolOrder;
        return this;
    }
    public withStrategy(strategy: UpgradeStrategy): ClusterUpgradeAction {
        this['strategy'] = strategy;
        return this;
    }
    public withTargetVersion(targetVersion: string): ClusterUpgradeAction {
        this['targetVersion'] = targetVersion;
        return this;
    }
}