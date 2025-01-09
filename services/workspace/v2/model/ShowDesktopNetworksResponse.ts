import { DesktopNetworkResult } from './DesktopNetworkResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopNetworksResponse extends SdkResponse {
    public networks?: Array<DesktopNetworkResult>;
    public constructor() { 
        super();
    }
    public withNetworks(networks: Array<DesktopNetworkResult>): ShowDesktopNetworksResponse {
        this['networks'] = networks;
        return this;
    }
}