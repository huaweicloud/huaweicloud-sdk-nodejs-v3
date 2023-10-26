

export class UpdateAlertConfigRequestBodyWarnConfig {
    public antiDDoS?: boolean;
    private 'back_doors'?: boolean;
    private 'bruce_force'?: boolean;
    private 'high_privilege'?: boolean;
    private 'remote_login'?: boolean;
    private 'send_frequency'?: number;
    public waf?: boolean;
    private 'weak_password'?: boolean;
    public constructor(antiDDoS?: boolean) { 
        this['antiDDoS'] = antiDDoS;
    }
    public withAntiDDoS(antiDDoS: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['antiDDoS'] = antiDDoS;
        return this;
    }
    public withBackDoors(backDoors: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['back_doors'] = backDoors;
        return this;
    }
    public set backDoors(backDoors: boolean  | undefined) {
        this['back_doors'] = backDoors;
    }
    public get backDoors(): boolean | undefined {
        return this['back_doors'];
    }
    public withBruceForce(bruceForce: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['bruce_force'] = bruceForce;
        return this;
    }
    public set bruceForce(bruceForce: boolean  | undefined) {
        this['bruce_force'] = bruceForce;
    }
    public get bruceForce(): boolean | undefined {
        return this['bruce_force'];
    }
    public withHighPrivilege(highPrivilege: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['high_privilege'] = highPrivilege;
        return this;
    }
    public set highPrivilege(highPrivilege: boolean  | undefined) {
        this['high_privilege'] = highPrivilege;
    }
    public get highPrivilege(): boolean | undefined {
        return this['high_privilege'];
    }
    public withRemoteLogin(remoteLogin: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['remote_login'] = remoteLogin;
        return this;
    }
    public set remoteLogin(remoteLogin: boolean  | undefined) {
        this['remote_login'] = remoteLogin;
    }
    public get remoteLogin(): boolean | undefined {
        return this['remote_login'];
    }
    public withSendFrequency(sendFrequency: number): UpdateAlertConfigRequestBodyWarnConfig {
        this['send_frequency'] = sendFrequency;
        return this;
    }
    public set sendFrequency(sendFrequency: number  | undefined) {
        this['send_frequency'] = sendFrequency;
    }
    public get sendFrequency(): number | undefined {
        return this['send_frequency'];
    }
    public withWaf(waf: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['waf'] = waf;
        return this;
    }
    public withWeakPassword(weakPassword: boolean): UpdateAlertConfigRequestBodyWarnConfig {
        this['weak_password'] = weakPassword;
        return this;
    }
    public set weakPassword(weakPassword: boolean  | undefined) {
        this['weak_password'] = weakPassword;
    }
    public get weakPassword(): boolean | undefined {
        return this['weak_password'];
    }
}