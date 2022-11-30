import { Page } from './Page';
import { QueryDeviceSimplify } from './QueryDeviceSimplify';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevicesResponse extends SdkResponse {
    public devices?: Array<QueryDeviceSimplify>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDevices(devices: Array<QueryDeviceSimplify>): ListDevicesResponse {
        this['devices'] = devices;
        return this;
    }
    public withPage(page: Page): ListDevicesResponse {
        this['page'] = page;
        return this;
    }
}