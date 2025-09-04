import { DeviceSimple } from './DeviceSimple';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceByDeviceCertificateResponse extends SdkResponse {
    public devices?: Array<DeviceSimple>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDevices(devices: Array<DeviceSimple>): ListDeviceByDeviceCertificateResponse {
        this['devices'] = devices;
        return this;
    }
    public withPage(page: Page): ListDeviceByDeviceCertificateResponse {
        this['page'] = page;
        return this;
    }
}