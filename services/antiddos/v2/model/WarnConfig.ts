

export class WarnConfig {
    public antiDDoS?: boolean;
    private 'back_doors'?: boolean;
    private 'bruce_force'?: boolean;
    private 'high_privilege'?: boolean;
    private 'remote_login'?: boolean;
    private 'send_frequency'?: WarnConfigSendFrequencyEnum | number;
    public waf?: boolean;
    private 'weak_password'?: boolean;
    public constructor(antiDDoS?: boolean) { 
        this['antiDDoS'] = antiDDoS;
    }
    public withAntiDDoS(antiDDoS: boolean): WarnConfig {
        this['antiDDoS'] = antiDDoS;
        return this;
    }
    public withBackDoors(backDoors: boolean): WarnConfig {
        this['back_doors'] = backDoors;
        return this;
    }
    public set backDoors(backDoors: boolean  | undefined) {
        this['back_doors'] = backDoors;
    }
    public get backDoors(): boolean | undefined {
        return this['back_doors'];
    }
    public withBruceForce(bruceForce: boolean): WarnConfig {
        this['bruce_force'] = bruceForce;
        return this;
    }
    public set bruceForce(bruceForce: boolean  | undefined) {
        this['bruce_force'] = bruceForce;
    }
    public get bruceForce(): boolean | undefined {
        return this['bruce_force'];
    }
    public withHighPrivilege(highPrivilege: boolean): WarnConfig {
        this['high_privilege'] = highPrivilege;
        return this;
    }
    public set highPrivilege(highPrivilege: boolean  | undefined) {
        this['high_privilege'] = highPrivilege;
    }
    public get highPrivilege(): boolean | undefined {
        return this['high_privilege'];
    }
    public withRemoteLogin(remoteLogin: boolean): WarnConfig {
        this['remote_login'] = remoteLogin;
        return this;
    }
    public set remoteLogin(remoteLogin: boolean  | undefined) {
        this['remote_login'] = remoteLogin;
    }
    public get remoteLogin(): boolean | undefined {
        return this['remote_login'];
    }
    public withSendFrequency(sendFrequency: WarnConfigSendFrequencyEnum | number): WarnConfig {
        this['send_frequency'] = sendFrequency;
        return this;
    }
    public set sendFrequency(sendFrequency: WarnConfigSendFrequencyEnum | number  | undefined) {
        this['send_frequency'] = sendFrequency;
    }
    public get sendFrequency(): WarnConfigSendFrequencyEnum | number | undefined {
        return this['send_frequency'];
    }
    public withWaf(waf: boolean): WarnConfig {
        this['waf'] = waf;
        return this;
    }
    public withWeakPassword(weakPassword: boolean): WarnConfig {
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
export enum WarnConfigSendFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
