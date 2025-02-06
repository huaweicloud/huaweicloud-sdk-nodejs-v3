

export class CreateAccountAssignmentReqBody {
    private 'permission_set_id'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: CreateAccountAssignmentReqBodyPrincipalTypeEnum | string;
    private 'target_id'?: string;
    private 'target_type'?: CreateAccountAssignmentReqBodyTargetTypeEnum | string;
    public constructor(permissionSetId?: string, principalId?: string, principalType?: string, targetId?: string, targetType?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['principal_id'] = principalId;
        this['principal_type'] = principalType;
        this['target_id'] = targetId;
        this['target_type'] = targetType;
    }
    public withPermissionSetId(permissionSetId: string): CreateAccountAssignmentReqBody {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPrincipalId(principalId: string): CreateAccountAssignmentReqBody {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: CreateAccountAssignmentReqBodyPrincipalTypeEnum | string): CreateAccountAssignmentReqBody {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: CreateAccountAssignmentReqBodyPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): CreateAccountAssignmentReqBodyPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
    public withTargetId(targetId: string): CreateAccountAssignmentReqBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetType(targetType: CreateAccountAssignmentReqBodyTargetTypeEnum | string): CreateAccountAssignmentReqBody {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: CreateAccountAssignmentReqBodyTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): CreateAccountAssignmentReqBodyTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAccountAssignmentReqBodyPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAccountAssignmentReqBodyTargetTypeEnum {
    ACCOUNT = 'ACCOUNT'
}
