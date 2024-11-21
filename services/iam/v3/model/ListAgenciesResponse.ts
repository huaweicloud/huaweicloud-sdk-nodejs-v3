import { AgencyListResult } from './AgencyListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgenciesResponse extends SdkResponse {
    public agencies?: Array<AgencyListResult>;
    public constructor() { 
        super();
    }
    public withAgencies(agencies: Array<AgencyListResult>): ListAgenciesResponse {
        this['agencies'] = agencies;
        return this;
    }
}