import { AgencyUpdateResult } from './AgencyUpdateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAgencyResponse extends SdkResponse {
    public agency?: AgencyUpdateResult;
    public constructor() { 
        super();
    }
    public withAgency(agency: AgencyUpdateResult): UpdateAgencyResponse {
        this['agency'] = agency;
        return this;
    }
}