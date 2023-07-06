

export class UserMigrationList {
    public id: string;
    public account: string;
    private 'is_set_password'?: boolean | undefined;
    public password?: string;
    public constructor(id?: any, account?: any) { 
        this['id'] = id;
        this['account'] = account;
    }
    public withId(id: string): UserMigrationList {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): UserMigrationList {
        this['account'] = account;
        return this;
    }
    public withIsSetPassword(isSetPassword: boolean): UserMigrationList {
        this['is_set_password'] = isSetPassword;
        return this;
    }
    public set isSetPassword(isSetPassword: boolean | undefined) {
        this['is_set_password'] = isSetPassword;
    }
    public get isSetPassword() {
        return this['is_set_password'];
    }
    public withPassword(password: string): UserMigrationList {
        this['password'] = password;
        return this;
    }
}