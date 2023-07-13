import { ClusterUpgradeAction } from './ClusterUpgradeAction';


export class UpgradeSpec {
    public clusterUpgradeAction?: ClusterUpgradeAction;
    public constructor() { 
    }
    public withClusterUpgradeAction(clusterUpgradeAction: ClusterUpgradeAction): UpgradeSpec {
        this['clusterUpgradeAction'] = clusterUpgradeAction;
        return this;
    }
}