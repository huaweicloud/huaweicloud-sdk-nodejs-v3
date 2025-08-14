

export class MfaDeviceDto {
    private 'device_id'?: string;
    private 'device_name'?: string;
    private 'display_name'?: string;
    private 'mfa_type'?: string;
    private 'registered_date'?: number;
    public constructor(deviceId?: string, deviceName?: string, displayName?: string, mfaType?: string, registeredDate?: number) { 
        this['device_id'] = deviceId;
        this['device_name'] = deviceName;
        this['display_name'] = displayName;
        this['mfa_type'] = mfaType;
        this['registered_date'] = registeredDate;
    }
    public withDeviceId(deviceId: string): MfaDeviceDto {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withDeviceName(deviceName: string): MfaDeviceDto {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withDisplayName(displayName: string): MfaDeviceDto {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withMfaType(mfaType: string): MfaDeviceDto {
        this['mfa_type'] = mfaType;
        return this;
    }
    public set mfaType(mfaType: string  | undefined) {
        this['mfa_type'] = mfaType;
    }
    public get mfaType(): string | undefined {
        return this['mfa_type'];
    }
    public withRegisteredDate(registeredDate: number): MfaDeviceDto {
        this['registered_date'] = registeredDate;
        return this;
    }
    public set registeredDate(registeredDate: number  | undefined) {
        this['registered_date'] = registeredDate;
    }
    public get registeredDate(): number | undefined {
        return this['registered_date'];
    }
}