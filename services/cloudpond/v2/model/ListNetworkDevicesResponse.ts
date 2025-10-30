import { NetworkDevice } from './NetworkDevice';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetworkDevicesResponse extends SdkResponse {
    private 'network_devices'?: Array<NetworkDevice>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withNetworkDevices(networkDevices: Array<NetworkDevice>): ListNetworkDevicesResponse {
        this['network_devices'] = networkDevices;
        return this;
    }
    public set networkDevices(networkDevices: Array<NetworkDevice>  | undefined) {
        this['network_devices'] = networkDevices;
    }
    public get networkDevices(): Array<NetworkDevice> | undefined {
        return this['network_devices'];
    }
    public withPageInfo(pageInfo: PageInfo): ListNetworkDevicesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}