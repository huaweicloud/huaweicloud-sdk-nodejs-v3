import { Links } from './Links';


export class KeystoneListUsersResult {
    private 'pwd_status'?: boolean;
    private 'domain_id'?: string;
    private 'last_project_id'?: string;
    public name?: string;
    public description?: string;
    private 'password_expires_at'?: string;
    public links?: Links;
    public id?: string;
    public enabled?: boolean;
    private 'pwd_strength'?: string;
    private 'access_mode'?: string;
    public constructor(domainId?: string, name?: string, passwordExpiresAt?: string, links?: Links, id?: string, enabled?: boolean) { 
        this['domain_id'] = domainId;
        this['name'] = name;
        this['password_expires_at'] = passwordExpiresAt;
        this['links'] = links;
        this['id'] = id;
        this['enabled'] = enabled;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneListUsersResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withDomainId(domainId: string): KeystoneListUsersResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withLastProjectId(lastProjectId: string): KeystoneListUsersResult {
        this['last_project_id'] = lastProjectId;
        return this;
    }
    public set lastProjectId(lastProjectId: string  | undefined) {
        this['last_project_id'] = lastProjectId;
    }
    public get lastProjectId(): string | undefined {
        return this['last_project_id'];
    }
    public withName(name: string): KeystoneListUsersResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): KeystoneListUsersResult {
        this['description'] = description;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): KeystoneListUsersResult {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string  | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt(): string | undefined {
        return this['password_expires_at'];
    }
    public withLinks(links: Links): KeystoneListUsersResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): KeystoneListUsersResult {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneListUsersResult {
        this['enabled'] = enabled;
        return this;
    }
    public withPwdStrength(pwdStrength: string): KeystoneListUsersResult {
        this['pwd_strength'] = pwdStrength;
        return this;
    }
    public set pwdStrength(pwdStrength: string  | undefined) {
        this['pwd_strength'] = pwdStrength;
    }
    public get pwdStrength(): string | undefined {
        return this['pwd_strength'];
    }
    public withAccessMode(accessMode: string): KeystoneListUsersResult {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
}