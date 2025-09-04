import { DeviceCertificateSimple } from './DeviceCertificateSimple';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceCertificateResponse extends SdkResponse {
    private 'device_certificates'?: Array<DeviceCertificateSimple>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withDeviceCertificates(deviceCertificates: Array<DeviceCertificateSimple>): ListDeviceCertificateResponse {
        this['device_certificates'] = deviceCertificates;
        return this;
    }
    public set deviceCertificates(deviceCertificates: Array<DeviceCertificateSimple>  | undefined) {
        this['device_certificates'] = deviceCertificates;
    }
    public get deviceCertificates(): Array<DeviceCertificateSimple> | undefined {
        return this['device_certificates'];
    }
    public withPage(page: Page): ListDeviceCertificateResponse {
        this['page'] = page;
        return this;
    }
}