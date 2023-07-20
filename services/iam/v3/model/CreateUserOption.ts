

export class CreateUserOption {
    private 'access_mode'?: string;
    public name?: string;
    private 'domain_id'?: string;
    public password?: string;
    public email?: string;
    public areacode?: string;
    public phone?: string;
    public enabled?: boolean;
    private 'pwd_status'?: boolean;
    private 'xuser_type'?: string;
    private 'xuser_id'?: string;
    public description?: string;
    public constructor(name?: string, domainId?: string) { 
        this['name'] = name;
        this['domain_id'] = domainId;
    }
    public withAccessMode(accessMode: string): CreateUserOption {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withName(name: string): CreateUserOption {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): CreateUserOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPassword(password: string): CreateUserOption {
        this['password'] = password;
        return this;
    }
    public withEmail(email: string): CreateUserOption {
        this['email'] = email;
        return this;
    }
    public withAreacode(areacode: string): CreateUserOption {
        this['areacode'] = areacode;
        return this;
    }
    public withPhone(phone: string): CreateUserOption {
        this['phone'] = phone;
        return this;
    }
    public withEnabled(enabled: boolean): CreateUserOption {
        this['enabled'] = enabled;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): CreateUserOption {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean  | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus(): boolean | undefined {
        return this['pwd_status'];
    }
    public withXuserType(xuserType: string): CreateUserOption {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string  | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType(): string | undefined {
        return this['xuser_type'];
    }
    public withXuserId(xuserId: string): CreateUserOption {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string  | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId(): string | undefined {
        return this['xuser_id'];
    }
    public withDescription(description: string): CreateUserOption {
        this['description'] = description;
        return this;
    }
}