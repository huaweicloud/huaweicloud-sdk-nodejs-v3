

export class UserAccountVO {
    public id?: string;
    public account?: string;
    public comment?: string;
    private 'is_transfer'?: boolean;
    public privileges?: Array<string>;
    public password?: string;
    private 'is_set_password'?: boolean;
    public roles?: Array<string>;
    public selected?: boolean;
    public constructor(id?: string, account?: string, isTransfer?: boolean, roles?: Array<string>, selected?: boolean) { 
        this['id'] = id;
        this['account'] = account;
        this['is_transfer'] = isTransfer;
        this['roles'] = roles;
        this['selected'] = selected;
    }
    public withId(id: string): UserAccountVO {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): UserAccountVO {
        this['account'] = account;
        return this;
    }
    public withComment(comment: string): UserAccountVO {
        this['comment'] = comment;
        return this;
    }
    public withIsTransfer(isTransfer: boolean): UserAccountVO {
        this['is_transfer'] = isTransfer;
        return this;
    }
    public set isTransfer(isTransfer: boolean  | undefined) {
        this['is_transfer'] = isTransfer;
    }
    public get isTransfer(): boolean | undefined {
        return this['is_transfer'];
    }
    public withPrivileges(privileges: Array<string>): UserAccountVO {
        this['privileges'] = privileges;
        return this;
    }
    public withPassword(password: string): UserAccountVO {
        this['password'] = password;
        return this;
    }
    public withIsSetPassword(isSetPassword: boolean): UserAccountVO {
        this['is_set_password'] = isSetPassword;
        return this;
    }
    public set isSetPassword(isSetPassword: boolean  | undefined) {
        this['is_set_password'] = isSetPassword;
    }
    public get isSetPassword(): boolean | undefined {
        return this['is_set_password'];
    }
    public withRoles(roles: Array<string>): UserAccountVO {
        this['roles'] = roles;
        return this;
    }
    public withSelected(selected: boolean): UserAccountVO {
        this['selected'] = selected;
        return this;
    }
}