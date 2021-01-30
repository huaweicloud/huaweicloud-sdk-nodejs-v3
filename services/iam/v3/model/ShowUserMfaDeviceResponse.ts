import { MfaDeviceResult } from './MfaDeviceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserMfaDeviceResponse extends SdkResponse {
    private 'virtual_mfa_device'?: MfaDeviceResult | undefined;
    public constructor() { 
        super();
    }
    public withVirtualMfaDevice(virtualMfaDevice: MfaDeviceResult): ShowUserMfaDeviceResponse {
        this['virtual_mfa_device'] = virtualMfaDevice;
        return this;
    }
    public set virtualMfaDevice(virtualMfaDevice: MfaDeviceResult | undefined) {
        this['virtual_mfa_device'] = virtualMfaDevice;
    }
    public get virtualMfaDevice() {
        return this['virtual_mfa_device'];
    }
}