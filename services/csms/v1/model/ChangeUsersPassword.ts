

export class ChangeUsersPassword {
    public password?: string;
    private 'old_password'?: string;
    public constructor(password?: string, oldPassword?: string) { 
        this['password'] = password;
        this['old_password'] = oldPassword;
    }
    public withPassword(password: string): ChangeUsersPassword {
        this['password'] = password;
        return this;
    }
    public withOldPassword(oldPassword: string): ChangeUsersPassword {
        this['old_password'] = oldPassword;
        return this;
    }
    public set oldPassword(oldPassword: string  | undefined) {
        this['old_password'] = oldPassword;
    }
    public get oldPassword(): string | undefined {
        return this['old_password'];
    }
}