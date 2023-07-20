import { ClusterDisasterRecovery } from './ClusterDisasterRecovery';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDisasterProgressResponse extends SdkResponse {
    private 'disaster_recovery_progress'?: ClusterDisasterRecovery;
    public constructor() { 
        super();
    }
    public withDisasterRecoveryProgress(disasterRecoveryProgress: ClusterDisasterRecovery): ShowDisasterProgressResponse {
        this['disaster_recovery_progress'] = disasterRecoveryProgress;
        return this;
    }
    public set disasterRecoveryProgress(disasterRecoveryProgress: ClusterDisasterRecovery  | undefined) {
        this['disaster_recovery_progress'] = disasterRecoveryProgress;
    }
    public get disasterRecoveryProgress(): ClusterDisasterRecovery | undefined {
        return this['disaster_recovery_progress'];
    }
}