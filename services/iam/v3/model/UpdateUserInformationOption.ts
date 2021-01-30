

export class UpdateUserInformationOption {
    public email?: string;
    public mobile?: string;
    public constructor() { 
    }
    public withEmail(email: string): UpdateUserInformationOption {
        this['email'] = email;
        return this;
    }
    public withMobile(mobile: string): UpdateUserInformationOption {
        this['mobile'] = mobile;
        return this;
    }
}