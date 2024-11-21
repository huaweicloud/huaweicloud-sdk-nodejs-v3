import { AgencyShowResult } from './AgencyShowResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgencyResponse extends SdkResponse {
    public agency?: AgencyShowResult;
    public constructor() { 
        super();
    }
    public withAgency(agency: AgencyShowResult): ShowAgencyResponse {
        this['agency'] = agency;
        return this;
    }
}