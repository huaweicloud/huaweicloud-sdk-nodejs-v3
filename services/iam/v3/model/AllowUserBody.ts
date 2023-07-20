

export class AllowUserBody {
    private 'manage_accesskey'?: boolean;
    private 'manage_email'?: boolean;
    private 'manage_mobile'?: boolean;
    private 'manage_password'?: boolean;
    public constructor() { 
    }
    public withManageAccesskey(manageAccesskey: boolean): AllowUserBody {
        this['manage_accesskey'] = manageAccesskey;
        return this;
    }
    public set manageAccesskey(manageAccesskey: boolean  | undefined) {
        this['manage_accesskey'] = manageAccesskey;
    }
    public get manageAccesskey(): boolean | undefined {
        return this['manage_accesskey'];
    }
    public withManageEmail(manageEmail: boolean): AllowUserBody {
        this['manage_email'] = manageEmail;
        return this;
    }
    public set manageEmail(manageEmail: boolean  | undefined) {
        this['manage_email'] = manageEmail;
    }
    public get manageEmail(): boolean | undefined {
        return this['manage_email'];
    }
    public withManageMobile(manageMobile: boolean): AllowUserBody {
        this['manage_mobile'] = manageMobile;
        return this;
    }
    public set manageMobile(manageMobile: boolean  | undefined) {
        this['manage_mobile'] = manageMobile;
    }
    public get manageMobile(): boolean | undefined {
        return this['manage_mobile'];
    }
    public withManagePassword(managePassword: boolean): AllowUserBody {
        this['manage_password'] = managePassword;
        return this;
    }
    public set managePassword(managePassword: boolean  | undefined) {
        this['manage_password'] = managePassword;
    }
    public get managePassword(): boolean | undefined {
        return this['manage_password'];
    }
}