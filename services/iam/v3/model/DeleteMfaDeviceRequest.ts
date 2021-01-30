

export class DeleteMfaDeviceRequest {
    private 'user_id': string | undefined;
    private 'serial_number': string | undefined;
    public constructor(userId: any, serialNumber: any) { 
        this['user_id'] = userId;
        this['serial_number'] = serialNumber;
    }
    public withUserId(userId: string): DeleteMfaDeviceRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withSerialNumber(serialNumber: string): DeleteMfaDeviceRequest {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber() {
        return this['serial_number'];
    }
}