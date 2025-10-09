import { TrustAgency } from './TrustAgency';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyV5Response extends SdkResponse {
    public agency?: TrustAgency;
    public constructor() { 
        super();
    }
    public withAgency(agency: TrustAgency): CreateAgencyV5Response {
        this['agency'] = agency;
        return this;
    }
}