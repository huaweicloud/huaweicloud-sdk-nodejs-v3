

export class UpdateUserOption {
    private 'access_mode'?: string | undefined;
    public name?: string;
    public password?: string;
    public email?: string;
    public areacode?: string;
    public phone?: string;
    public enabled?: boolean;
    private 'pwd_status'?: boolean | undefined;
    private 'xuser_type'?: string | undefined;
    private 'xuser_id'?: string | undefined;
    public description?: string;
    public constructor() { 
    }
    public withAccessMode(accessMode: string): UpdateUserOption {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode() {
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
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
    public withXuserType(xuserType: string): UpdateUserOption {
        this['xuser_type'] = xuserType;
        return this;
    }
    public set xuserType(xuserType: string | undefined) {
        this['xuser_type'] = xuserType;
    }
    public get xuserType() {
        return this['xuser_type'];
    }
    public withXuserId(xuserId: string): UpdateUserOption {
        this['xuser_id'] = xuserId;
        return this;
    }
    public set xuserId(xuserId: string | undefined) {
        this['xuser_id'] = xuserId;
    }
    public get xuserId() {
        return this['xuser_id'];
    }
    public withDescription(description: string): UpdateUserOption {
        this['description'] = description;
        return this;
    }
}