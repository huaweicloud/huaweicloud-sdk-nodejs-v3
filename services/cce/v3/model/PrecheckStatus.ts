import { AddonCheckStatus } from './AddonCheckStatus';
import { ClusterCheckStatus } from './ClusterCheckStatus';
import { NodeCheckStatus } from './NodeCheckStatus';


export class PrecheckStatus {
    public phase?: string;
    public expireTimeStamp?: string;
    public message?: string;
    public clusterCheckStatus?: ClusterCheckStatus;
    public addonCheckStatus?: AddonCheckStatus;
    public nodeCheckStatus?: NodeCheckStatus;
    public constructor() { 
    }
    public withPhase(phase: string): PrecheckStatus {
        this['phase'] = phase;
        return this;
    }
    public withExpireTimeStamp(expireTimeStamp: string): PrecheckStatus {
        this['expireTimeStamp'] = expireTimeStamp;
        return this;
    }
    public withMessage(message: string): PrecheckStatus {
        this['message'] = message;
        return this;
    }
    public withClusterCheckStatus(clusterCheckStatus: ClusterCheckStatus): PrecheckStatus {
        this['clusterCheckStatus'] = clusterCheckStatus;
        return this;
    }
    public withAddonCheckStatus(addonCheckStatus: AddonCheckStatus): PrecheckStatus {
        this['addonCheckStatus'] = addonCheckStatus;
        return this;
    }
    public withNodeCheckStatus(nodeCheckStatus: NodeCheckStatus): PrecheckStatus {
        this['nodeCheckStatus'] = nodeCheckStatus;
        return this;
    }
}