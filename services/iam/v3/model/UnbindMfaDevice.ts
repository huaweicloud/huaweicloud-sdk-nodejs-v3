

export class UnbindMfaDevice {
    private 'user_id'?: string;
    private 'authentication_code'?: string;
    private 'serial_number'?: string;
    public constructor(userId?: string, authenticationCode?: string, serialNumber?: string) { 
        this['user_id'] = userId;
        this['authentication_code'] = authenticationCode;
        this['serial_number'] = serialNumber;
    }
    public withUserId(userId: string): UnbindMfaDevice {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAuthenticationCode(authenticationCode: string): UnbindMfaDevice {
        this['authentication_code'] = authenticationCode;
        return this;
    }
    public set authenticationCode(authenticationCode: string  | undefined) {
        this['authentication_code'] = authenticationCode;
    }
    public get authenticationCode(): string | undefined {
        return this['authentication_code'];
    }
    public withSerialNumber(serialNumber: string): UnbindMfaDevice {
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