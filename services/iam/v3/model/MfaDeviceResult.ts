

export class MfaDeviceResult {
    private 'serial_number'?: string;
    private 'user_id'?: string;
    public constructor(serialNumber?: string, userId?: string) { 
        this['serial_number'] = serialNumber;
        this['user_id'] = userId;
    }
    public withSerialNumber(serialNumber: string): MfaDeviceResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withUserId(userId: string): MfaDeviceResult {
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