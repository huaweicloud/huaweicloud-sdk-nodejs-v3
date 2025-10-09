import { VirtualMfaDevice } from './VirtualMfaDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVirtualMfaDeviceV5Response extends SdkResponse {
    private 'virtual_mfa_device'?: VirtualMfaDevice;
    public constructor() { 
        super();
    }
    public withVirtualMfaDevice(virtualMfaDevice: VirtualMfaDevice): CreateVirtualMfaDeviceV5Response {
        this['virtual_mfa_device'] = virtualMfaDevice;
        return this;
    }
    public set virtualMfaDevice(virtualMfaDevice: VirtualMfaDevice  | undefined) {
        this['virtual_mfa_device'] = virtualMfaDevice;
    }
    public get virtualMfaDevice(): VirtualMfaDevice | undefined {
        return this['virtual_mfa_device'];
    }
}