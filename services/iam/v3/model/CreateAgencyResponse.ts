import { AgencyResult } from './AgencyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyResponse extends SdkResponse {
    public agency?: AgencyResult;
    public constructor() { 
        super();
    }
    public withAgency(agency: AgencyResult): CreateAgencyResponse {
        this['agency'] = agency;
        return this;
    }
}