import { KeystoneUserResultExtra } from './KeystoneUserResultExtra';
import { LinksSelf } from './LinksSelf';


export class KeystoneUpdateUserByAdminResult {
    private 'pwd_status'?: boolean | undefined;
    private 'domain_id': string | undefined;
    private 'last_project_id'?: string | undefined;
    public name: string;
    public description?: string;
    private 'password_expires_at': string | undefined;
    public links: LinksSelf;
    public id: string;
    public enabled: boolean;
    public extra?: KeystoneUserResultExtra;
    public constructor(domainId: any, name: any, passwordExpiresAt: any, links: any, id: any, enabled: any) { 
        this['domain_id'] = domainId;
        this['name'] = name;
        this['password_expires_at'] = passwordExpiresAt;
        this['links'] = links;
        this['id'] = id;
        this['enabled'] = enabled;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneUpdateUserByAdminResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
    public withDomainId(domainId: string): KeystoneUpdateUserByAdminResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withLastProjectId(lastProjectId: string): KeystoneUpdateUserByAdminResult {
        this['last_project_id'] = lastProjectId;
        return this;
    }
    public set lastProjectId(lastProjectId: string | undefined) {
        this['last_project_id'] = lastProjectId;
    }
    public get lastProjectId() {
        return this['last_project_id'];
    }
    public withName(name: string): KeystoneUpdateUserByAdminResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): KeystoneUpdateUserByAdminResult {
        this['description'] = description;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): KeystoneUpdateUserByAdminResult {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
    public withLinks(links: LinksSelf): KeystoneUpdateUserByAdminResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): KeystoneUpdateUserByAdminResult {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneUpdateUserByAdminResult {
        this['enabled'] = enabled;
        return this;
    }
    public withExtra(extra: KeystoneUserResultExtra): KeystoneUpdateUserByAdminResult {
        this['extra'] = extra;
        return this;
    }
}