import { AgencyAssumedbyUserDomain } from './AgencyAssumedbyUserDomain';


export class AgencyAssumedbyUser {
    public name?: string;
    public id?: string;
    public domain?: AgencyAssumedbyUserDomain;
    private 'password_expires_at'?: string;
    public constructor(name?: string, id?: string, domain?: AgencyAssumedbyUserDomain, passwordExpiresAt?: string) { 
        this['name'] = name;
        this['id'] = id;
        this['domain'] = domain;
        this['password_expires_at'] = passwordExpiresAt;
    }
    public withName(name: string): AgencyAssumedbyUser {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AgencyAssumedbyUser {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: AgencyAssumedbyUserDomain): AgencyAssumedbyUser {
        this['domain'] = domain;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): AgencyAssumedbyUser {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string  | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt(): string | undefined {
        return this['password_expires_at'];
    }
}