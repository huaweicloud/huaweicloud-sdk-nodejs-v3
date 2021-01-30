

export class MfaDeviceResult {
    private 'serial_number': string | undefined;
    private 'user_id': string | undefined;
    public constructor(serialNumber: any, userId: any) { 
        this['serial_number'] = serialNumber;
        this['user_id'] = userId;
    }
    public withSerialNumber(serialNumber: string): MfaDeviceResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber() {
        return this['serial_number'];
    }
    public withUserId(userId: string): MfaDeviceResult {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
}