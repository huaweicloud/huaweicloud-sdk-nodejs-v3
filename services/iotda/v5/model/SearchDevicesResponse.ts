import { SearchDevice } from './SearchDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDevicesResponse extends SdkResponse {
    public devices?: Array<SearchDevice>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDevices(devices: Array<SearchDevice>): SearchDevicesResponse {
        this['devices'] = devices;
        return this;
    }
    public withCount(count: number): SearchDevicesResponse {
        this['count'] = count;
        return this;
    }
}