import { Links } from './Links';


export class KeystoneShowUserResult {
    private 'pwd_status'?: boolean;
    private 'domain_id'?: string;
    private 'last_project_id'?: string;
    public name?: string;
    public description?: string;
    private 'password_expires_at'?: string;
    public links?: Links;
    public id?: string;
    public enabled?: boolean;
    public constructor(domainId?: string, name?: string, passwordExpiresAt?: string, links?: Links, id?: string, enabled?: boolean) { 
        this['domain_id'] = domainId;
        this['name'] = name;
        this['password_expires_at'] = passwordExpiresAt;
        this['links'] = links;
        this['id'] = id;
        this['enabled'] = enabled;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneShowUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withDomainId(domainId: string): KeystoneShowUserResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withLastProjectId(lastProjectId: string): KeystoneShowUserResult {
        this['last_project_id'] = lastProjectId;
        return this;
    }
    public set lastProjectId(lastProjectId: string  | undefined) {
        this['last_project_id'] = lastProjectId;
    }
    public get lastProjectId(): string | undefined {
        return this['last_project_id'];
    }
    public withName(name: string): KeystoneShowUserResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): KeystoneShowUserResult {
        this['description'] = description;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): KeystoneShowUserResult {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string  | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt(): string | undefined {
        return this['password_expires_at'];
    }
    public withLinks(links: Links): KeystoneShowUserResult {
        this['links'] = links;
        return this;
    }
    public withId(id: string): KeystoneShowUserResult {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneShowUserResult {
        this['enabled'] = enabled;
        return this;
    }
}