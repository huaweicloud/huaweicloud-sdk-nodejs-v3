import { CreateMfaDevice } from './CreateMfaDevice';


export class CreateMfaDeviceReq {
    private 'virtual_mfa_device': CreateMfaDevice | undefined;
    public constructor(virtualMfaDevice: any) { 
        this['virtual_mfa_device'] = virtualMfaDevice;
    }
    public withVirtualMfaDevice(virtualMfaDevice: CreateMfaDevice): CreateMfaDeviceReq {
        this['virtual_mfa_device'] = virtualMfaDevice;
        return this;
    }
    public set virtualMfaDevice(virtualMfaDevice: CreateMfaDevice | undefined) {
        this['virtual_mfa_device'] = virtualMfaDevice;
    }
    public get virtualMfaDevice() {
        return this['virtual_mfa_device'];
    }
}