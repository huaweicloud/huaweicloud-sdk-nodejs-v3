import { IpaddressesData } from './IpaddressesData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointIpaddressesResponse extends SdkResponse {
    public ipaddresses?: Array<IpaddressesData>;
    public constructor() { 
        super();
    }
    public withIpaddresses(ipaddresses: Array<IpaddressesData>): ListEndpointIpaddressesResponse {
        this['ipaddresses'] = ipaddresses;
        return this;
    }
}