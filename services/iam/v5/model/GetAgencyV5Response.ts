import { AgencyEx } from './AgencyEx';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAgencyV5Response extends SdkResponse {
    public agency?: AgencyEx;
    public constructor() { 
        super();
    }
    public withAgency(agency: AgencyEx): GetAgencyV5Response {
        this['agency'] = agency;
        return this;
    }
}