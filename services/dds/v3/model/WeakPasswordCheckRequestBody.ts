

export class WeakPasswordCheckRequestBody {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): WeakPasswordCheckRequestBody {
        this['password'] = password;
        return this;
    }
}