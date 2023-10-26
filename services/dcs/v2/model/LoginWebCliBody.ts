

export class LoginWebCliBody {
    public password?: string;
    public constructor() { 
    }
    public withPassword(password: string): LoginWebCliBody {
        this['password'] = password;
        return this;
    }
}