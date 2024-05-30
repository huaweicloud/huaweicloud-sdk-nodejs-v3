import { ListDeviceGroupSummary } from './ListDeviceGroupSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceGroupsByDeviceResponse extends SdkResponse {
    private 'device_groups'?: Array<ListDeviceGroupSummary>;
    public constructor() { 
        super();
    }
    public withDeviceGroups(deviceGroups: Array<ListDeviceGroupSummary>): ListDeviceGroupsByDeviceResponse {
        this['device_groups'] = deviceGroups;
        return this;
    }
    public set deviceGroups(deviceGroups: Array<ListDeviceGroupSummary>  | undefined) {
        this['device_groups'] = deviceGroups;
    }
    public get deviceGroups(): Array<ListDeviceGroupSummary> | undefined {
        return this['device_groups'];
    }
}