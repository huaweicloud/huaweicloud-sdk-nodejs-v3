import { Links } from './Links';


export class ShowUserResult {
    public enabled: boolean;
    public id: string;
    private 'domain_id': string | undefined;
    public name: string;
    public links: Links;
    private 'xuser_id'?: string | undefined;
    private 'xuser_type'?: string | undefined;
    public areacode?: string;
    public email?: string;
    public phone?: string;
    private 'pwd_status'?: boolean | undefined;
    private 'update_time'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'last_login_time'?: string | undefined;
    private 'pwd_stength'?: string | undefined;
    private 'is_domain_owner': boolean | undefined;
    private 'access_mode': string | undefined;
    public description: string;
    public constructor(enabled: any, id: any, domainId: any, name: any, links: any, isDomainOwner: any, accessMode: any, description: any) { 
        this['enabled'] = enabled;
        this['id'] = id;
        this['domain_id'] = domainId;
        this['name'] = name;
        this['links'] = links;
        this['is_domain_owner'] = isDomainOwner;
        this['access_mode'] = accessMode;
        this['description'] = description;
    }
    public withEnabled(enabled: boolean): ShowUserResult {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): ShowUserResult {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): ShowUserResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): ShowUserResult {
        this['name'] = name;
        return this;
    }
    public withLinks(links: Links): ShowUserResult {
        this['links'] = links;
        return this;
    }
    public withXuserId(xuserId: string): ShowUserResult {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId() {
        return this['xuser_id'];
    }
    public withXuserType(xuserType: string): ShowUserResult {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType() {
        return this['xuser_type'];
    }
    public withAreacode(areacode: string): ShowUserResult {
        this['areacode'] = areacode;
        return this;
    }
    public withEmail(email: string): ShowUserResult {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): ShowUserResult {
        this['phone'] = phone;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): ShowUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
    public withUpdateTime(updateTime: string): ShowUserResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withCreateTime(createTime: string): ShowUserResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withLastLoginTime(lastLoginTime: string): ShowUserResult {
        this['last_login_time'] = lastLoginTime;
        return this;
    }
    public set lastLoginTime(lastLoginTime: string | undefined) {
        this['last_login_time'] = lastLoginTime;
    }
    public get lastLoginTime() {
        return this['last_login_time'];
    }
    public withPwdStength(pwdStength: string): ShowUserResult {
        this['pwd_stength'] = pwdStength;
        return this;
    }
    public set pwdStength(pwdStength: string | undefined) {
        this['pwd_stength'] = pwdStength;
    }
    public get pwdStength() {
        return this['pwd_stength'];
    }
    public withIsDomainOwner(isDomainOwner: boolean): ShowUserResult {
        this['is_domain_owner'] = isDomainOwner;
        return this;
    }
    public set isDomainOwner(isDomainOwner: boolean | undefined) {
        this['is_domain_owner'] = isDomainOwner;
    }
    public get isDomainOwner() {
        return this['is_domain_owner'];
    }
    public withAccessMode(accessMode: string): ShowUserResult {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode() {
        return this['access_mode'];
    }
    public withDescription(description: string): ShowUserResult {
        this['description'] = description;
        return this;
    }
}