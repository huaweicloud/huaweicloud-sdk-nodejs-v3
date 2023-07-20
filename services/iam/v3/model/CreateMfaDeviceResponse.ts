import { CreateMfaDeviceRespon } from './CreateMfaDeviceRespon';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMfaDeviceResponse extends SdkResponse {
    private 'virtual_mfa_device'?: CreateMfaDeviceRespon;
    public constructor() { 
        super();
    }
    public withVirtualMfaDevice(virtualMfaDevice: CreateMfaDeviceRespon): CreateMfaDeviceResponse {
        this['virtual_mfa_device'] = virtualMfaDevice;
        return this;
    }
    public set virtualMfaDevice(virtualMfaDevice: CreateMfaDeviceRespon  | undefined) {
        this['virtual_mfa_device'] = virtualMfaDevice;
    }
    public get virtualMfaDevice(): CreateMfaDeviceRespon | undefined {
        return this['virtual_mfa_device'];
    }
}