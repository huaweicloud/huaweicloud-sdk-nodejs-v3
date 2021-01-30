import { KeystoneUserResultExtra } from './KeystoneUserResultExtra';
import { Links } from './Links';


export class KeystoneUserResult {
    private 'pwd_status'?: boolean | undefined;
    private 'domain_id': string | undefined;
    private 'last_project_id'?: string | undefined;
    public name: string;
    public description?: string;
    private 'password_expires_at': string | undefined;
    public links: Links;
    public id: string;
    public enabled: boolean;
    private 'pwd_strength'?: string | undefined;
    public extra?: KeystoneUserResultExtra;
    public constructor(domainId: any, name: any, passwordExpiresAt: any, links: any, id: any, enabled: any) { 
        this['domain_id'] = domainId;
        this['name'] = name;
        this['password_expires_at'] = passwordExpiresAt;
        this['links'] = links;
        this['id'] = id;
        this['enabled'] = enabled;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
    public withDomainId(domainId: string): KeystoneUserResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withLastProjectId(lastProjectId: string): KeystoneUserResult {
        this['last_project_id'] = lastProjectId;
        return this;
    }
    public set lastProjectId(lastProjectId: string | undefined) {
        this['last_project_id'] = lastProjectId;
    }
    public get lastProjectId() {
        return this['last_project_id'];
    }
    public withName(name: string): KeystoneUserResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): KeystoneUserResult {
        this['description'] = description;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): KeystoneUserResult {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
    public withLinks(links: Links): KeystoneUserResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): KeystoneUserResult {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneUserResult {
        this['enabled'] = enabled;
        return this;
    }
    public withPwdStrength(pwdStrength: string): KeystoneUserResult {
        this['pwd_strength'] = pwdStrength;
        return this;
    }
    public set pwdStrength(pwdStrength: string | undefined) {
        this['pwd_strength'] = pwdStrength;
    }
    public get pwdStrength() {
        return this['pwd_strength'];
    }
    public withExtra(extra: KeystoneUserResultExtra): KeystoneUserResult {
        this['extra'] = extra;
        return this;
    }
}