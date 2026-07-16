import { SubnetIpAvailability } from './SubnetIpAvailability';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNetworkAvailableIpResponse extends SdkResponse {
    public name?: string;
    public networkId?: string;
    public subnetIpAvailability?: Array<SubnetIpAvailability>;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowNetworkAvailableIpResponse {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): ShowNetworkAvailableIpResponse {
        this['networkId'] = networkId;
        return this;
    }
    public withSubnetIpAvailability(subnetIpAvailability: Array<SubnetIpAvailability>): ShowNetworkAvailableIpResponse {
        this['subnetIpAvailability'] = subnetIpAvailability;
        return this;
    }
}