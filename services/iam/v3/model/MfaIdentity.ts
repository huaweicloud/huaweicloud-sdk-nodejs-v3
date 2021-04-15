import { MfaTotp } from './MfaTotp';
import { PwdPassword } from './PwdPassword';


export class MfaIdentity {
    public methods: Array<MfaIdentityMethodsEnum>;
    public password: PwdPassword;
    public totp: MfaTotp;
    public constructor(methods?: any, password?: any, totp?: any) { 
        this['methods'] = methods;
        this['password'] = password;
        this['totp'] = totp;
    }
    public withMethods(methods: Array<MfaIdentityMethodsEnum>): MfaIdentity {
        this['methods'] = methods;
        return this;
    }
    public withPassword(password: PwdPassword): MfaIdentity {
        this['password'] = password;
        return this;
    }
    public withTotp(totp: MfaTotp): MfaIdentity {
        this['totp'] = totp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MfaIdentityMethodsEnum {
    PASSWORD = 'password',
    TOTP = ' totp'
}
