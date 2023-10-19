

export class AclAccountRoleModifyBody {
    private 'account_role'?: AclAccountRoleModifyBodyAccountRoleEnum | string;
    public constructor() { 
    }
    public withAccountRole(accountRole: AclAccountRoleModifyBodyAccountRoleEnum | string): AclAccountRoleModifyBody {
        this['account_role'] = accountRole;
        return this;
    }
    public set accountRole(accountRole: AclAccountRoleModifyBodyAccountRoleEnum | string  | undefined) {
        this['account_role'] = accountRole;
    }
    public get accountRole(): AclAccountRoleModifyBodyAccountRoleEnum | string | undefined {
        return this['account_role'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AclAccountRoleModifyBodyAccountRoleEnum {
    READ = 'read',
    WRITE = 'write'
}
