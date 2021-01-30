

export class KeystoneUpdateUserOption {
    private 'domain_id'?: string | undefined;
    public name?: string;
    public password?: string;
    public enabled?: boolean;
    public description?: string;
    private 'pwd_status'?: boolean | undefined;
    public constructor() { 
    }
    public withDomainId(domainId: string): KeystoneUpdateUserOption {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneUpdateUserOption {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): KeystoneUpdateUserOption {
        this['password'] = password;
        return this;
    }
    public withEnabled(enabled: boolean): KeystoneUpdateUserOption {
        this['enabled'] = enabled;
        return this;
    }
    public withDescription(description: string): KeystoneUpdateUserOption {
        this['description'] = description;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneUpdateUserOption {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
}