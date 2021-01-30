import { AgencyResult } from './AgencyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgenciesResponse extends SdkResponse {
    public agencies?: Array<AgencyResult>;
    public constructor() { 
        super();
    }
    public withAgencies(agencies: Array<AgencyResult>): ListAgenciesResponse {
        this['agencies'] = agencies;
        return this;
    }
}