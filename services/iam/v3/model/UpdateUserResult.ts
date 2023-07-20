import { LinksSelf } from './LinksSelf';


export class UpdateUserResult {
    private 'access_mode'?: string;
    private 'pwd_status'?: boolean;
    private 'xuser_id'?: string;
    private 'xuser_type'?: string;
    public description?: string;
    public name?: string;
    public phone?: string;
    private 'domain_id'?: string;
    public enabled?: boolean;
    public areacode?: string;
    public email?: string;
    public id?: string;
    public links?: LinksSelf;
    private 'password_expires_at'?: string;
    public constructor(name?: string, domainId?: string, enabled?: boolean, id?: string, links?: LinksSelf) { 
        this['name'] = name;
        this['domain_id'] = domainId;
        this['enabled'] = enabled;
        this['id'] = id;
        this['links'] = links;
    }
    public withAccessMode(accessMode: string): UpdateUserResult {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withPwdStatus(pwdStatus: boolean): UpdateUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withXuserId(xuserId: string): UpdateUserResult {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string  | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId(): string | undefined {
        return this['xuser_id'];
    }
    public withXuserType(xuserType: string): UpdateUserResult {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string  | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType(): string | undefined {
        return this['xuser_type'];
    }
    public withDescription(description: string): UpdateUserResult {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateUserResult {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): UpdateUserResult {
        this['phone'] = phone;
        return this;
    }
    public withDomainId(domainId: string): UpdateUserResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnabled(enabled: boolean): UpdateUserResult {
        this['enabled'] = enabled;
        return this;
    }
    public withAreacode(areacode: string): UpdateUserResult {
        this['areacode'] = areacode;
        return this;
    }
    public withEmail(email: string): UpdateUserResult {
        this['email'] = email;
        return this;
    }
    public withId(id: string): UpdateUserResult {
        this['id'] = id;
        return this;
    }
    public withLinks(links: LinksSelf): UpdateUserResult {
        this['links'] = links;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): UpdateUserResult {
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