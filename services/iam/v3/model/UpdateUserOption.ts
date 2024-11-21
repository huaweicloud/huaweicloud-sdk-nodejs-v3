

export class UpdateUserOption {
    private 'create_time'?: string;
    private 'xdomain_id'?: string;
    private 'xdomain_type'?: string;
    private 'is_domain_owner'?: boolean;
    private 'access_mode'?: string;
    public name?: string;
    public password?: string;
    public email?: string;
    public areacode?: string;
    public phone?: string;
    public enabled?: boolean;
    private 'pwd_status'?: boolean;
    private 'xuser_type'?: string;
    private 'xuser_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): UpdateUserOption {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withXdomainId(xdomainId: string): UpdateUserOption {
        this['xdomain_id'] = xdomainId;
        return this;
    }
    public set xdomainId(xdomainId: string  | undefined) {
        this['xdomain_id'] = xdomainId;
    }
    public get xdomainId(): string | undefined {
        return this['xdomain_id'];
    }
    public withXdomainType(xdomainType: string): UpdateUserOption {
        this['xdomain_type'] = xdomainType;
        return this;
    }
    public set xdomainType(xdomainType: string  | undefined) {
        this['xdomain_type'] = xdomainType;
    }
    public get xdomainType(): string | undefined {
        return this['xdomain_type'];
    }
    public withIsDomainOwner(isDomainOwner: boolean): UpdateUserOption {
        this['is_domain_owner'] = isDomainOwner;
        return this;
    }
    public set isDomainOwner(isDomainOwner: boolean  | undefined) {
        this['is_domain_owner'] = isDomainOwner;
    }
    public get isDomainOwner(): boolean | undefined {
        return this['is_domain_owner'];
    }
    public withAccessMode(accessMode: string): UpdateUserOption {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withName(name: string): UpdateUserOption {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): UpdateUserOption {
        this['password'] = password;
        return this;
    }
    public withEmail(email: string): UpdateUserOption {
        this['email'] = email;
        return this;
    }
    public withAreacode(areacode: string): UpdateUserOption {
        this['areacode'] = areacode;
        return this;
    }
    public withPhone(phone: string): UpdateUserOption {
        this['phone'] = phone;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateUserOption {
        this['enabled'] = enabled;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): UpdateUserOption {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withXuserType(xuserType: string): UpdateUserOption {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string  | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType(): string | undefined {
        return this['xuser_type'];
    }
    public withXuserId(xuserId: string): UpdateUserOption {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string  | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId(): string | undefined {
        return this['xuser_id'];
    }
    public withDescription(description: string): UpdateUserOption {
        this['description'] = description;
        return this;
    }
}