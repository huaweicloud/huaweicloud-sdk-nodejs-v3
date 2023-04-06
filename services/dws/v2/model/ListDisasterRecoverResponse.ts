import { DisasterRecovery } from './DisasterRecovery';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDisasterRecoverResponse extends SdkResponse {
    private 'disaster_recovery'?: Array<DisasterRecovery> | undefined;
    public constructor() { 
        super();
    }
    public withDisasterRecovery(disasterRecovery: Array<DisasterRecovery>): ListDisasterRecoverResponse {
        this['disaster_recovery'] = disasterRecovery;
        return this;
    }
    public set disasterRecovery(disasterRecovery: Array<DisasterRecovery> | undefined) {
        this['disaster_recovery'] = disasterRecovery;
    }
    public get disasterRecovery() {
        return this['disaster_recovery'];
    }
}