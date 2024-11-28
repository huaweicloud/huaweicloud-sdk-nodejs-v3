import { Agency } from './Agency';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyResponse extends SdkResponse {
    public agencies?: Array<Agency>;
    public constructor() { 
        super();
    }
    public withAgencies(agencies: Array<Agency>): CreateAgencyResponse {
        this['agencies'] = agencies;
        return this;
    }
}