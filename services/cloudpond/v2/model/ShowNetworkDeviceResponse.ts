import { NetworkDevice } from './NetworkDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNetworkDeviceResponse extends SdkResponse {
    private 'network_device'?: NetworkDevice;
    public constructor() { 
        super();
    }
    public withNetworkDevice(networkDevice: NetworkDevice): ShowNetworkDeviceResponse {
        this['network_device'] = networkDevice;
        return this;
    }
    public set networkDevice(networkDevice: NetworkDevice  | undefined) {
        this['network_device'] = networkDevice;
    }
    public get networkDevice(): NetworkDevice | undefined {
        return this['network_device'];
    }
}