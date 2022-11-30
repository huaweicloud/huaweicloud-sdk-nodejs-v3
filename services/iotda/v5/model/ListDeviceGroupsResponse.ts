import { DeviceGroupResponseDTO } from './DeviceGroupResponseDTO';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceGroupsResponse extends SdkResponse {
    private 'device_groups'?: Array<DeviceGroupResponseDTO> | undefined;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDeviceGroups(deviceGroups: Array<DeviceGroupResponseDTO>): ListDeviceGroupsResponse {
        this['device_groups'] = deviceGroups;
        return this;
    }
    public set deviceGroups(deviceGroups: Array<DeviceGroupResponseDTO> | undefined) {
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