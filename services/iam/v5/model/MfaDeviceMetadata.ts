

export class MfaDeviceMetadata {
    private 'serial_number'?: string;
    private 'user_id'?: string;
    public enabled?: boolean;
    public constructor(serialNumber?: string, userId?: string, enabled?: boolean) { 
        this['serial_number'] = serialNumber;
        this['user_id'] = userId;
        this['enabled'] = enabled;
    }
    public withSerialNumber(serialNumber: string): MfaDeviceMetadata {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withUserId(userId: string): MfaDeviceMetadata {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEnabled(enabled: boolean): MfaDeviceMetadata {
        this['enabled'] = enabled;
        return this;
    }
}