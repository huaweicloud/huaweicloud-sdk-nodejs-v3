import { AzInfo } from './AzInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailabilityZoneInfosResponse extends SdkResponse {
    public azs?: Array<AzInfo>;
    public constructor() { 
        super();
    }
    public withAzs(azs: Array<AzInfo>): ListAvailabilityZoneInfosResponse {
        this['azs'] = azs;
        return this;
    }
}