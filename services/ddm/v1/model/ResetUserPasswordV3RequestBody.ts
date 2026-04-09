

export class ResetUserPasswordV3RequestBody {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): ResetUserPasswordV3RequestBody {
        this['password'] = password;
        return this;
    }
}