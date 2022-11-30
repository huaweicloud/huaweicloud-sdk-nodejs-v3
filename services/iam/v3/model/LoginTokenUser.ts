import { LoginTokenDomain } from './LoginTokenDomain';


export class LoginTokenUser {
    public domain?: LoginTokenDomain;
    public name?: string;
    private 'password_expires_at'?: string | undefined;
    public id?: string;
    public constructor() { 
    }
    public withDomain(domain: LoginTokenDomain): LoginTokenUser {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): LoginTokenUser {
        this['name'] = name;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): LoginTokenUser {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
    public withId(id: string): LoginTokenUser {
        this['id'] = id;
        return this;
    }
}