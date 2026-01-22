import { IpRegionResponseBodyData } from './IpRegionResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    public data?: Array<IpRegionResponseBodyData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<IpRegionResponseBodyData>): ListRegionsResponse {
        this['data'] = data;
        return this;
    }
}