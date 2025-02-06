

export class DeleteAccountAssignmentReqBody {
    private 'permission_set_id'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: DeleteAccountAssignmentReqBodyPrincipalTypeEnum | string;
    private 'target_id'?: string;
    private 'target_type'?: DeleteAccountAssignmentReqBodyTargetTypeEnum | string;
    public constructor(permissionSetId?: string, principalId?: string, principalType?: string, targetId?: string, targetType?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
        this['target_id'] = targetId;
        this['target_type'] = targetType;
    }
    public withPermissionSetId(permissionSetId: string): DeleteAccountAssignmentReqBody {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPrincipalId(principalId: string): DeleteAccountAssignmentReqBody {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: DeleteAccountAssignmentReqBodyPrincipalTypeEnum | string): DeleteAccountAssignmentReqBody {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: DeleteAccountAssignmentReqBodyPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): DeleteAccountAssignmentReqBodyPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
    public withTargetId(targetId: string): DeleteAccountAssignmentReqBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetType(targetType: DeleteAccountAssignmentReqBodyTargetTypeEnum | string): DeleteAccountAssignmentReqBody {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: DeleteAccountAssignmentReqBodyTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): DeleteAccountAssignmentReqBodyTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteAccountAssignmentReqBodyPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteAccountAssignmentReqBodyTargetTypeEnum {
    ACCOUNT = 'ACCOUNT'
}
