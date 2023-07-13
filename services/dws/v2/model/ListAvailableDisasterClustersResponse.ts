import { DisasterRecoveryClusterVo } from './DisasterRecoveryClusterVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableDisasterClustersResponse extends SdkResponse {
    private 'disaster_recovery_clusters'?: Array<DisasterRecoveryClusterVo> | undefined;
    public constructor() { 
        super();
    }
    public withDisasterRecoveryClusters(disasterRecoveryClusters: Array<DisasterRecoveryClusterVo>): ListAvailableDisasterClustersResponse {
        this['disaster_recovery_clusters'] = disasterRecoveryClusters;
        return this;
    }
    public set disasterRecoveryClusters(disasterRecoveryClusters: Array<DisasterRecoveryClusterVo> | undefined) {
        this['disaster_recovery_clusters'] = disasterRecoveryClusters;
    }
    public get disasterRecoveryClusters() {
        return this['disaster_recovery_clusters'];
    }
}