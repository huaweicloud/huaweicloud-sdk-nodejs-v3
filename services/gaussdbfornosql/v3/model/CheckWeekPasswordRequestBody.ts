

export class CheckWeekPasswordRequestBody {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): CheckWeekPasswordRequestBody {
        this['password'] = password;
        return this;
    }
}