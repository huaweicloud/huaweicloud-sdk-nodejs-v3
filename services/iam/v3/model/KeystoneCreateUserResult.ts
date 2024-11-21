import { LinksSelf } from './LinksSelf';


export class KeystoneCreateUserResult {
    private 'domain_id'?: string;
    public name?: string;
    public description?: string;
    private 'pwd_status'?: boolean;
    private 'password_expires_at'?: string;
    public links?: LinksSelf;
    public id?: string;
    public enabled?: boolean;
    public constructor(domainId?: string, name?: string, passwordExpiresAt?: string, links?: LinksSelf, id?: string, enabled?: boolean) { 
        this['domain_id'] = domainId;
        this['name'] = name;
        this['password_expires_at'] = passwordExpiresAt;
        this['links'] = links;
        this['id'] = id;
        this['enabled'] = enabled;
    }
    public withDomainId(domainId: string): KeystoneCreateUserResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneCreateUserResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): KeystoneCreateUserResult {
        this['description'] = description;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneCreateUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): KeystoneCreateUserResult {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string  | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt(): string | undefined {
        return this['password_expires_at'];
    }
    public withLinks(links: LinksSelf): KeystoneCreateUserResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): KeystoneCreateUserResult {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneCreateUserResult {
        this['enabled'] = enabled;
        return this;
    }
}