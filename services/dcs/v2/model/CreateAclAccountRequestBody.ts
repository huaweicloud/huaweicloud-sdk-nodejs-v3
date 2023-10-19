

export class CreateAclAccountRequestBody {
    private 'account_name'?: string;
    private 'account_role'?: CreateAclAccountRequestBodyAccountRoleEnum | string;
    private 'account_password'?: string;
    public description?: string;
    public constructor(accountName?: string, accountRole?: string, accountPassword?: string) { 
        this['account_name'] = accountName;
        this['account_role'] = accountRole;
        this['account_password'] = accountPassword;
    }
    public withAccountName(accountName: string): CreateAclAccountRequestBody {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountRole(accountRole: CreateAclAccountRequestBodyAccountRoleEnum | string): CreateAclAccountRequestBody {
        this['account_role'] = accountRole;
        return this;
    }
    public set accountRole(accountRole: CreateAclAccountRequestBodyAccountRoleEnum | string  | undefined) {
        this['account_role'] = accountRole;
    }
    public get accountRole(): CreateAclAccountRequestBodyAccountRoleEnum | string | undefined {
        return this['account_role'];
    }
    public withAccountPassword(accountPassword: string): CreateAclAccountRequestBody {
        this['account_password'] = accountPassword;
        return this;
    }
    public set accountPassword(accountPassword: string  | undefined) {
        this['account_password'] = accountPassword;
    }
    public get accountPassword(): string | undefined {
        return this['account_password'];
    }
    public withDescription(description: string): CreateAclAccountRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAclAccountRequestBodyAccountRoleEnum {
    READ = 'read',
    WRITE = 'write'
}
