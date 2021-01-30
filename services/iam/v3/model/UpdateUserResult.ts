import { LinksSelf } from './LinksSelf';


export class UpdateUserResult {
    private 'pwd_status'?: boolean | undefined;
    private 'xuser_id'?: string | undefined;
    private 'xuser_type'?: string | undefined;
    public description?: string;
    public name: string;
    public phone?: string;
    private 'domain_id': string | undefined;
    public enabled: boolean;
    public areacode?: string;
    public email?: string;
    public id: string;
    public links: LinksSelf;
    private 'password_expires_at'?: string | undefined;
    public constructor(name: any, domainId: any, enabled: any, id: any, links: any) { 
        this['name'] = name;
        this['domain_id'] = domainId;
        this['enabled'] = enabled;
        this['id'] = id;
        this['links'] = links;
    }
    public withPwdStatus(pwdStatus: boolean): UpdateUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
    public withXuserId(xuserId: string): UpdateUserResult {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId() {
        return this['xuser_id'];
    }
    public withXuserType(xuserType: string): UpdateUserResult {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType() {
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
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
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
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
}