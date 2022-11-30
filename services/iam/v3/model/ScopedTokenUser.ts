import { TokenDomainResult } from './TokenDomainResult';
import { TokenUserOsfederation } from './TokenUserOsfederation';


export class ScopedTokenUser {
    public domain: TokenDomainResult;
    private 'OS-FEDERATION': TokenUserOsfederation | undefined;
    public id: string;
    public name: string;
    private 'password_expires_at': string | undefined;
    public constructor(domain?: any, osFederation?: any, id?: any, name?: any, passwordExpiresAt?: any) { 
        this['domain'] = domain;
        this['OS-FEDERATION'] = osFederation;
        this['id'] = id;
        this['name'] = name;
        this['password_expires_at'] = passwordExpiresAt;
    }
    public withDomain(domain: TokenDomainResult): ScopedTokenUser {
        this['domain'] = domain;
        return this;
    }
    public withOsFederation(osFederation: TokenUserOsfederation): ScopedTokenUser {
        this['OS-FEDERATION'] = osFederation;
        return this;
    }
    public set osFederation(osFederation: TokenUserOsfederation | undefined) {
        this['OS-FEDERATION'] = osFederation;
    }
    public get osFederation() {
        return this['OS-FEDERATION'];
    }
    public withId(id: string): ScopedTokenUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScopedTokenUser {
        this['name'] = name;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): ScopedTokenUser {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
}