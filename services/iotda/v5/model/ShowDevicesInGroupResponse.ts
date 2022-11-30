import { Page } from './Page';
import { SimplifyDevice } from './SimplifyDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDevicesInGroupResponse extends SdkResponse {
    public devices?: Array<SimplifyDevice>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDevices(devices: Array<SimplifyDevice>): ShowDevicesInGroupResponse {
        this['devices'] = devices;
        return this;
    }
    public withPage(page: Page): ShowDevicesInGroupResponse {
        this['page'] = page;
        return this;
    }
}