import { NetworkIpAvailability } from './NetworkIpAvailability';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNetworkIpAvailabilitiesResponse extends SdkResponse {
    private 'network_ip_availability'?: NetworkIpAvailability | undefined;
    public constructor() { 
        super();
    }
    public withNetworkIpAvailability(networkIpAvailability: NetworkIpAvailability): ShowNetworkIpAvailabilitiesResponse {
        this['network_ip_availability'] = networkIpAvailability;
        return this;
    }
    public set networkIpAvailability(networkIpAvailability: NetworkIpAvailability | undefined) {
        this['network_ip_availability'] = networkIpAvailability;
    }
    public get networkIpAvailability() {
        return this['network_ip_availability'];
    }
}