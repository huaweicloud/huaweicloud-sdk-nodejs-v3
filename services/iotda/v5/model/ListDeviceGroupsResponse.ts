import { DeviceGroupResponsSummery } from './DeviceGroupResponsSummery';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceGroupsResponse extends SdkResponse {
    private 'device_groups'?: Array<DeviceGroupResponsSummery> | undefined;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDeviceGroups(deviceGroups: Array<DeviceGroupResponsSummery>): ListDeviceGroupsResponse {
        this['device_groups'] = deviceGroups;
        return this;
    }
    public set deviceGroups(deviceGroups: Array<DeviceGroupResponsSummery> | undefined) {
        this['device_groups'] = deviceGroups;
    }
    public get deviceGroups() {
        return this['device_groups'];
    }
    public withPage(page: Page): ListDeviceGroupsResponse {
        this['page'] = page;
        return this;
    }
}