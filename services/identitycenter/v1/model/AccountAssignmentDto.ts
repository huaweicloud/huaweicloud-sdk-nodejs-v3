

export class AccountAssignmentDto {
    private 'account_id'?: string;
    private 'permission_set_id'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: AccountAssignmentDtoPrincipalTypeEnum | string;
    public constructor() { 
    }
    public withAccountId(accountId: string): AccountAssignmentDto {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withPermissionSetId(permissionSetId: string): AccountAssignmentDto {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPrincipalId(principalId: string): AccountAssignmentDto {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: AccountAssignmentDtoPrincipalTypeEnum | string): AccountAssignmentDto {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: AccountAssignmentDtoPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): AccountAssignmentDtoPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccountAssignmentDtoPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
