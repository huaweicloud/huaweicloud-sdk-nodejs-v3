import { AgencyResult } from './AgencyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgencyResponse extends SdkResponse {
    public agency?: AgencyResult;
    public constructor() { 
        super();
    }
    public withAgency(agency: AgencyResult): ShowAgencyResponse {
        this['agency'] = agency;
        return this;
    }
}