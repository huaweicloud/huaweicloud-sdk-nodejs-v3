

export class BindMfaDevice {
    private 'user_id'?: string;
    private 'serial_number'?: string;
    private 'authentication_code_first'?: string;
    private 'authentication_code_second'?: string;
    public constructor(userId?: string, serialNumber?: string, authenticationCodeFirst?: string, authenticationCodeSecond?: string) { 
        this['user_id'] = userId;
        this['serial_number'] = serialNumber;
        this['authentication_code_first'] = authenticationCodeFirst;
        this['authentication_code_second'] = authenticationCodeSecond;
    }
    public withUserId(userId: string): BindMfaDevice {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withSerialNumber(serialNumber: string): BindMfaDevice {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withAuthenticationCodeFirst(authenticationCodeFirst: string): BindMfaDevice {
        this['authentication_code_first'] = authenticationCodeFirst;
        return this;
    }
    public set authenticationCodeFirst(authenticationCodeFirst: string  | undefined) {
        this['authentication_code_first'] = authenticationCodeFirst;
    }
    public get authenticationCodeFirst(): string | undefined {
        return this['authentication_code_first'];
    }
    public withAuthenticationCodeSecond(authenticationCodeSecond: string): BindMfaDevice {
        this['authentication_code_second'] = authenticationCodeSecond;
        return this;
    }
    public set authenticationCodeSecond(authenticationCodeSecond: string  | undefined) {
        this['authentication_code_second'] = authenticationCodeSecond;
    }
    public get authenticationCodeSecond(): string | undefined {
        return this['authentication_code_second'];
    }
}