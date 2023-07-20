import { DisasterRecoveryQueryResp } from './DisasterRecoveryQueryResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDisasterDetailResponse extends SdkResponse {
    private 'disaster_recovery'?: DisasterRecoveryQueryResp;
    public constructor() { 
        super();
    }
    public withDisasterRecovery(disasterRecovery: DisasterRecoveryQueryResp): ShowDisasterDetailResponse {
        this['disaster_recovery'] = disasterRecovery;
        return this;
    }
    public set disasterRecovery(disasterRecovery: DisasterRecoveryQueryResp  | undefined) {
        this['disaster_recovery'] = disasterRecovery;
    }
    public get disasterRecovery(): DisasterRecoveryQueryResp | undefined {
        return this['disaster_recovery'];
    }
}