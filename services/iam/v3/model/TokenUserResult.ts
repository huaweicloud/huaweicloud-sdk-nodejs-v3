import { TokenUserDomainResult } from './TokenUserDomainResult';


export class TokenUserResult {
    public name: string;
    public id: string;
    private 'password_expires_at': string | undefined;
    public domain: TokenUserDomainResult;
    public constructor(name?: any, id?: any, passwordExpiresAt?: any, domain?: any) { 
        this['name'] = name;
        this['id'] = id;
        this['password_expires_at'] = passwordExpiresAt;
        this['domain'] = domain;
    }
    public withName(name: string): TokenUserResult {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TokenUserResult {
        this['id'] = id;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): TokenUserResult {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
    public withDomain(domain: TokenUserDomainResult): TokenUserResult {
        this['domain'] = domain;
        return this;
    }
}