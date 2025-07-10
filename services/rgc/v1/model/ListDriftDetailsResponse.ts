import { DriftDetail } from './DriftDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDriftDetailsResponse extends SdkResponse {
    private 'drift_details'?: Array<DriftDetail>;
    public constructor() { 
        super();
    }
    public withDriftDetails(driftDetails: Array<DriftDetail>): ListDriftDetailsResponse {
        this['drift_details'] = driftDetails;
        return this;
    }
    public set driftDetails(driftDetails: Array<DriftDetail>  | undefined) {
        this['drift_details'] = driftDetails;
    }
    public get driftDetails(): Array<DriftDetail> | undefined {
        return this['drift_details'];
    }
}