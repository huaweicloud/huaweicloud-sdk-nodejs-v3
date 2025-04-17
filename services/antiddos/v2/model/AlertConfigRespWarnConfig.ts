

export class AlertConfigRespWarnConfig {
    public antiDDoS?: boolean;
    private 'back_doors'?: boolean;
    private 'bruce_force'?: boolean;
    private 'high_privilege'?: boolean;
    private 'remote_login'?: boolean;
    private 'send_frequency'?: AlertConfigRespWarnConfigSendFrequencyEnum | number;
    public waf?: boolean;
    private 'weak_password'?: boolean;
    public constructor(antiDDoS?: boolean) { 
        this['antiDDoS'] = antiDDoS;
    }
    public withAntiDDoS(antiDDoS: boolean): AlertConfigRespWarnConfig {
        this['antiDDoS'] = antiDDoS;
        return this;
    }
    public withBackDoors(backDoors: boolean): AlertConfigRespWarnConfig {
        this['back_doors'] = backDoors;
        return this;
    }
    public set backDoors(backDoors: boolean  | undefined) {
        this['back_doors'] = backDoors;
    }
    public get backDoors(): boolean | undefined {
        return this['back_doors'];
    }
    public withBruceForce(bruceForce: boolean): AlertConfigRespWarnConfig {
        this['bruce_force'] = bruceForce;
        return this;
    }
    public set bruceForce(bruceForce: boolean  | undefined) {
        this['bruce_force'] = bruceForce;
    }
    public get bruceForce(): boolean | undefined {
        return this['bruce_force'];
    }
    public withHighPrivilege(highPrivilege: boolean): AlertConfigRespWarnConfig {
        this['high_privilege'] = highPrivilege;
        return this;
    }
    public set highPrivilege(highPrivilege: boolean  | undefined) {
        this['high_privilege'] = highPrivilege;
    }
    public get highPrivilege(): boolean | undefined {
        return this['high_privilege'];
    }
    public withRemoteLogin(remoteLogin: boolean): AlertConfigRespWarnConfig {
        this['remote_login'] = remoteLogin;
        return this;
    }
    public set remoteLogin(remoteLogin: boolean  | undefined) {
        this['remote_login'] = remoteLogin;
    }
    public get remoteLogin(): boolean | undefined {
        return this['remote_login'];
    }
    public withSendFrequency(sendFrequency: AlertConfigRespWarnConfigSendFrequencyEnum | number): AlertConfigRespWarnConfig {
        this['send_frequency'] = sendFrequency;
        return this;
    }
    public set sendFrequency(sendFrequency: AlertConfigRespWarnConfigSendFrequencyEnum | number  | undefined) {
        this['send_frequency'] = sendFrequency;
    }
    public get sendFrequency(): AlertConfigRespWarnConfigSendFrequencyEnum | number | undefined {
        return this['send_frequency'];
    }
    public withWaf(waf: boolean): AlertConfigRespWarnConfig {
        this['waf'] = waf;
        return this;
    }
    public withWeakPassword(weakPassword: boolean): AlertConfigRespWarnConfig {
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

/**
    * @export
    * @enum {string}
    */
export enum AlertConfigRespWarnConfigSendFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
