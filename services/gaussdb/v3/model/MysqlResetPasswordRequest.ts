

export class MysqlResetPasswordRequest {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): MysqlResetPasswordRequest {
        this['password'] = password;
        return this;
    }
}