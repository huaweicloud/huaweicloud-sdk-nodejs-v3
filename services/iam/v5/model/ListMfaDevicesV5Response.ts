import { MfaDeviceMetadata } from './MfaDeviceMetadata';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMfaDevicesV5Response extends SdkResponse {
    private 'mfa_devices'?: Array<MfaDeviceMetadata>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withMfaDevices(mfaDevices: Array<MfaDeviceMetadata>): ListMfaDevicesV5Response {
        this['mfa_devices'] = mfaDevices;
        return this;
    }
    public set mfaDevices(mfaDevices: Array<MfaDeviceMetadata>  | undefined) {
        this['mfa_devices'] = mfaDevices;
    }
    public get mfaDevices(): Array<MfaDeviceMetadata> | undefined {
        return this['mfa_devices'];
    }
    public withPageInfo(pageInfo: PageInfo): ListMfaDevicesV5Response {
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