import { PwdPassword } from './PwdPassword';


export class PwdIdentity {
    public methods?: Array<PwdIdentityMethodsEnum> | Array<string>;
    public password?: PwdPassword;
    public constructor(methods?: Array<string>, password?: PwdPassword) { 
        this['methods'] = methods;
        this['password'] = password;
    }
    public withMethods(methods: Array<PwdIdentityMethodsEnum> | Array<string>): PwdIdentity {
        this['methods'] = methods;
        return this;
    }
    public withPassword(password: PwdPassword): PwdIdentity {
        this['password'] = password;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PwdIdentityMethodsEnum {
    PASSWORD = 'password'
}
