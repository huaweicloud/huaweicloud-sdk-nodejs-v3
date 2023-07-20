

export class CreateUserResult {
    private 'access_mode'?: string;
    public status?: number;
    private 'pwd_status'?: boolean;
    private 'xuser_id'?: string;
    private 'xuser_type'?: string;
    public description?: string;
    public name?: string;
    public phone?: string;
    private 'is_domain_owner'?: boolean;
    private 'domain_id'?: string;
    public enabled?: boolean;
    public areacode?: string;
    public email?: string;
    private 'create_time'?: string;
    private 'xdomain_id'?: string;
    private 'xdomain_type'?: string;
    public id?: string;
    private 'password_expires_at'?: string;
    public constructor(name?: string, domainId?: string, enabled?: boolean, id?: string) { 
        this['name'] = name;
        this['domain_id'] = domainId;
        this['enabled'] = enabled;
        this['id'] = id;
    }
    public withAccessMode(accessMode: string): CreateUserResult {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withStatus(status: number): CreateUserResult {
        this['status'] = status;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): CreateUserResult {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withXuserId(xuserId: string): CreateUserResult {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string  | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId(): string | undefined {
        return this['xuser_id'];
    }
    public withXuserType(xuserType: string): CreateUserResult {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string  | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType(): string | undefined {
        return this['xuser_type'];
    }
    public withDescription(description: string): CreateUserResult {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateUserResult {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): CreateUserResult {
        this['phone'] = phone;
        return this;
    }
    public withIsDomainOwner(isDomainOwner: boolean): CreateUserResult {
        this['is_domain_owner'] = isDomainOwner;
        return this;
    }
    public set isDomainOwner(isDomainOwner: boolean  | undefined) {
        this['is_domain_owner'] = isDomainOwner;
    }
    public get isDomainOwner(): boolean | undefined {
        return this['is_domain_owner'];
    }
    public withDomainId(domainId: string): CreateUserResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnabled(enabled: boolean): CreateUserResult {
        this['enabled'] = enabled;
        return this;
    }
    public withAreacode(areacode: string): CreateUserResult {
        this['areacode'] = areacode;
        return this;
    }
    public withEmail(email: string): CreateUserResult {
        this['email'] = email;
        return this;
    }
    public withCreateTime(createTime: string): CreateUserResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withXdomainId(xdomainId: string): CreateUserResult {
        this['xdomain_id'] = xdomainId;
        return this;
    }
    public set xdomainId(xdomainId: string  | undefined) {
        this['xdomain_id'] = xdomainId;
    }
    public get xdomainId(): string | undefined {
        return this['xdomain_id'];
    }
    public withXdomainType(xdomainType: string): CreateUserResult {
        this['xdomain_type'] = xdomainType;
        return this;
    }
    public set xdomainType(xdomainType: string  | undefined) {
        this['xdomain_type'] = xdomainType;
    }
    public get xdomainType(): string | undefined {
        return this['xdomain_type'];
    }
    public withId(id: string): CreateUserResult {
        this['id'] = id;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): CreateUserResult {
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