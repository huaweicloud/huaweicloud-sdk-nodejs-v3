import { MfaDeviceResult } from './MfaDeviceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserMfaDevicesResponse extends SdkResponse {
    private 'virtual_mfa_devices'?: Array<MfaDeviceResult> | undefined;
    public constructor() { 
        super();
    }
    public withVirtualMfaDevices(virtualMfaDevices: Array<MfaDeviceResult>): ListUserMfaDevicesResponse {
        this['virtual_mfa_devices'] = virtualMfaDevices;
        return this;
    }
    public set virtualMfaDevices(virtualMfaDevices: Array<MfaDeviceResult> | undefined) {
        this['virtual_mfa_devices'] = virtualMfaDevices;
    }
    public get virtualMfaDevices() {
        return this['virtual_mfa_devices'];
    }
}