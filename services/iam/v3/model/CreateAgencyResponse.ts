import { AgencyCreateResult } from './AgencyCreateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyResponse extends SdkResponse {
    public agency?: AgencyCreateResult;
    public constructor() { 
        super();
    }
    public withAgency(agency: AgencyCreateResult): CreateAgencyResponse {
        this['agency'] = agency;
        return this;
    }
}