

export class WeakPasswordRequestBody {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): WeakPasswordRequestBody {
        this['password'] = password;
        return this;
    }
}