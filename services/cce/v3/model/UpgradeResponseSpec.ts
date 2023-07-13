import { ClusterUpgradeResponseAction } from './ClusterUpgradeResponseAction';


export class UpgradeResponseSpec {
    public clusterUpgradeAction?: ClusterUpgradeResponseAction;
    public constructor() { 
    }
    public withClusterUpgradeAction(clusterUpgradeAction: ClusterUpgradeResponseAction): UpgradeResponseSpec {
        this['clusterUpgradeAction'] = clusterUpgradeAction;
        return this;
    }
}