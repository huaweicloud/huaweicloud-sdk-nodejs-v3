

export class CreateVirtualMfaDeviceReqBody {
    private 'virtual_mfa_device_name'?: string;
    private 'user_id'?: string;
    public constructor(virtualMfaDeviceName?: string, userId?: string) { 
        this['virtual_mfa_device_name'] = virtualMfaDeviceName;
        this['user_id'] = userId;
    }
    public withVirtualMfaDeviceName(virtualMfaDeviceName: string): CreateVirtualMfaDeviceReqBody {
        this['virtual_mfa_device_name'] = virtualMfaDeviceName;
        return this;
    }
    public set virtualMfaDeviceName(virtualMfaDeviceName: string  | undefined) {
        this['virtual_mfa_device_name'] = virtualMfaDeviceName;
    }
    public get virtualMfaDeviceName(): string | undefined {
        return this['virtual_mfa_device_name'];
    }
    public withUserId(userId: string): CreateVirtualMfaDeviceReqBody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}