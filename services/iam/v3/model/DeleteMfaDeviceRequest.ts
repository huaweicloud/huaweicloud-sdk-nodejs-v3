

export class DeleteMfaDeviceRequest {
    private 'user_id'?: string;
    private 'serial_number'?: string;
    public constructor(userId?: string, serialNumber?: string) { 
        this['user_id'] = userId;
        this['serial_number'] = serialNumber;
    }
    public withUserId(userId: string): DeleteMfaDeviceRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withSerialNumber(serialNumber: string): DeleteMfaDeviceRequest {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
}