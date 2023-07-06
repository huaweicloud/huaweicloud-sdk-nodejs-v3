

export class QueryUserDetailResp {
    public id?: string;
    public account?: string;
    public comment?: string;
    private 'is_transfer'?: boolean | undefined;
    public privileges?: string;
    public password?: string;
    public roles?: Array<string>;
    public selected?: boolean;
    private 'no_privileges'?: string | undefined;
    private 'parent_account'?: string | undefined;
    private 'no_parent_account'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): QueryUserDetailResp {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): QueryUserDetailResp {
        this['account'] = account;
        return this;
    }
    public withComment(comment: string): QueryUserDetailResp {
        this['comment'] = comment;
        return this;
    }
    public withIsTransfer(isTransfer: boolean): QueryUserDetailResp {
        this['is_transfer'] = isTransfer;
        return this;
    }
    public set isTransfer(isTransfer: boolean | undefined) {
        this['is_transfer'] = isTransfer;
    }
    public get isTransfer() {
        return this['is_transfer'];
    }
    public withPrivileges(privileges: string): QueryUserDetailResp {
        this['privileges'] = privileges;
        return this;
    }
    public withPassword(password: string): QueryUserDetailResp {
        this['password'] = password;
        return this;
    }
    public withRoles(roles: Array<string>): QueryUserDetailResp {
        this['roles'] = roles;
        return this;
    }
    public withSelected(selected: boolean): QueryUserDetailResp {
        this['selected'] = selected;
        return this;
    }
    public withNoPrivileges(noPrivileges: string): QueryUserDetailResp {
        this['no_privileges'] = noPrivileges;
        return this;
    }
    public set noPrivileges(noPrivileges: string | undefined) {
        this['no_privileges'] = noPrivileges;
    }
    public get noPrivileges() {
        return this['no_privileges'];
    }
    public withParentAccount(parentAccount: string): QueryUserDetailResp {
        this['parent_account'] = parentAccount;
        return this;
    }
    public set parentAccount(parentAccount: string | undefined) {
        this['parent_account'] = parentAccount;
    }
    public get parentAccount() {
        return this['parent_account'];
    }
    public withNoParentAccount(noParentAccount: string): QueryUserDetailResp {
        this['no_parent_account'] = noParentAccount;
        return this;
    }
    public set noParentAccount(noParentAccount: string | undefined) {
        this['no_parent_account'] = noParentAccount;
    }
    public get noParentAccount() {
        return this['no_parent_account'];
    }
}