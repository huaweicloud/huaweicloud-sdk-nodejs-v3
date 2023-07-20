

export class ResetPasswordRequestBody {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): ResetPasswordRequestBody {
        this['password'] = password;
        return this;
    }
}