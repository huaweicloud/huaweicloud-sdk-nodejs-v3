

export class UserLastLogin {
    private 'last_login_at'?: Date;
    public constructor() { 
    }
    public withLastLoginAt(lastLoginAt: Date): UserLastLogin {
        this['last_login_at'] = lastLoginAt;
        return this;
    }
    public set lastLoginAt(lastLoginAt: Date  | undefined) {
        this['last_login_at'] = lastLoginAt;
    }
    public get lastLoginAt(): Date | undefined {
        return this['last_login_at'];
    }
}