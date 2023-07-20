import { DeviceGroupResponseSummary } from './DeviceGroupResponseSummary';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceGroupsResponse extends SdkResponse {
    private 'device_groups'?: Array<DeviceGroupResponseSummary>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDeviceGroups(deviceGroups: Array<DeviceGroupResponseSummary>): ListDeviceGroupsResponse {
        this['device_groups'] = deviceGroups;
        return this;
    }
    public set deviceGroups(deviceGroups: Array<DeviceGroupResponseSummary>  | undefined) {
        this['device_groups'] = deviceGroups;
    }
    public get deviceGroups(): Array<DeviceGroupResponseSummary> | undefined {
        return this['device_groups'];
    }
    public withPage(page: Page): ListDeviceGroupsResponse {
        this['page'] = page;
        return this;
    }
}