import { Links } from './Links';


export class ShowUserResult {
    public enabled?: boolean;
    public id?: string;
    private 'domain_id'?: string;
    public name?: string;
    public links?: Links;
    private 'xuser_id'?: string;
    private 'xuser_type'?: string;
    public areacode?: string;
    public email?: string;
    public phone?: string;
    private 'pwd_status'?: boolean;
    private 'update_time'?: string;
    private 'create_time'?: string;
    private 'last_login_time'?: string;
    private 'pwd_strength'?: string;
    private 'is_domain_owner'?: boolean;
    private 'access_mode'?: string;
    public description?: string;
    private 'pwd_create_time'?: string;
    private 'modify_pwd_time'?: string;
    public constructor(enabled?: boolean, id?: string, domainId?: string, name?: string, links?: Links, isDomainOwner?: boolean, accessMode?: string, description?: string) { 
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
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
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
    public set xuserId(xuserId: string  | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId(): string | undefined {
        return this['xuser_id'];
    }
    public withXuserType(xuserType: string): ShowUserResult {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string  | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType(): string | undefined {
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
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withUpdateTime(updateTime: string): ShowUserResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: string): ShowUserResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastLoginTime(lastLoginTime: string): ShowUserResult {
        this['last_login_time'] = lastLoginTime;
        return this;
    }
    public set lastLoginTime(lastLoginTime: string  | undefined) {
        this['last_login_time'] = lastLoginTime;
    }
    public get lastLoginTime(): string | undefined {
        return this['last_login_time'];
    }
    public withPwdStrength(pwdStrength: string): ShowUserResult {
        this['pwd_strength'] = pwdStrength;
        return this;
    }
    public set pwdStrength(pwdStrength: string  | undefined) {
        this['pwd_strength'] = pwdStrength;
    }
    public get pwdStrength(): string | undefined {
        return this['pwd_strength'];
    }
    public withIsDomainOwner(isDomainOwner: boolean): ShowUserResult {
        this['is_domain_owner'] = isDomainOwner;
        return this;
    }
    public set isDomainOwner(isDomainOwner: boolean  | undefined) {
        this['is_domain_owner'] = isDomainOwner;
    }
    public get isDomainOwner(): boolean | undefined {
        return this['is_domain_owner'];
    }
    public withAccessMode(accessMode: string): ShowUserResult {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withDescription(description: string): ShowUserResult {
        this['description'] = description;
        return this;
    }
    public withPwdCreateTime(pwdCreateTime: string): ShowUserResult {
        this['pwd_create_time'] = pwdCreateTime;
        return this;
    }
    public set pwdCreateTime(pwdCreateTime: string  | undefined) {
        this['pwd_create_time'] = pwdCreateTime;
    }
    public get pwdCreateTime(): string | undefined {
        return this['pwd_create_time'];
    }
    public withModifyPwdTime(modifyPwdTime: string): ShowUserResult {
        this['modify_pwd_time'] = modifyPwdTime;
        return this;
    }
    public set modifyPwdTime(modifyPwdTime: string  | undefined) {
        this['modify_pwd_time'] = modifyPwdTime;
    }
    public get modifyPwdTime(): string | undefined {
        return this['modify_pwd_time'];
    }
}