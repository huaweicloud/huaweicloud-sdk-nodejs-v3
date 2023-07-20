import { PwdPasswordUserDomain } from './PwdPasswordUserDomain';


export class PwdPasswordUser {
    public domain?: PwdPasswordUserDomain;
    public name?: string;
    public password?: string;
    public constructor(domain?: PwdPasswordUserDomain, name?: string, password?: string) { 
        this['domain'] = domain;
        this['name'] = name;
        this['password'] = password;
    }
    public withDomain(domain: PwdPasswordUserDomain): PwdPasswordUser {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): PwdPasswordUser {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): PwdPasswordUser {
        this['password'] = password;
        return this;
    }
}