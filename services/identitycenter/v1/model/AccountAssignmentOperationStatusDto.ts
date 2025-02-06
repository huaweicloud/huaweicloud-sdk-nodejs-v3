

export class AccountAssignmentOperationStatusDto {
    private 'created_date'?: number;
    private 'failure_reason'?: string;
    private 'permission_set_id'?: string;
    private 'principal_id'?: string;
    private 'principal_type'?: AccountAssignmentOperationStatusDtoPrincipalTypeEnum | string;
    private 'request_id'?: string;
    public status?: AccountAssignmentOperationStatusDtoStatusEnum | string;
    private 'target_id'?: string;
    private 'target_type'?: AccountAssignmentOperationStatusDtoTargetTypeEnum | string;
    public constructor() { 
    }
    public withCreatedDate(createdDate: number): AccountAssignmentOperationStatusDto {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withFailureReason(failureReason: string): AccountAssignmentOperationStatusDto {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
    public withPermissionSetId(permissionSetId: string): AccountAssignmentOperationStatusDto {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPrincipalId(principalId: string): AccountAssignmentOperationStatusDto {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalType(principalType: AccountAssignmentOperationStatusDtoPrincipalTypeEnum | string): AccountAssignmentOperationStatusDto {
        this['principal_type'] = principalType;
        return this;
    }
    public set principalType(principalType: AccountAssignmentOperationStatusDtoPrincipalTypeEnum | string  | undefined) {
        this['principal_type'] = principalType;
    }
    public get principalType(): AccountAssignmentOperationStatusDtoPrincipalTypeEnum | string | undefined {
        return this['principal_type'];
    }
    public withRequestId(requestId: string): AccountAssignmentOperationStatusDto {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withStatus(status: AccountAssignmentOperationStatusDtoStatusEnum | string): AccountAssignmentOperationStatusDto {
        this['status'] = status;
        return this;
    }
    public withTargetId(targetId: string): AccountAssignmentOperationStatusDto {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetType(targetType: AccountAssignmentOperationStatusDtoTargetTypeEnum | string): AccountAssignmentOperationStatusDto {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: AccountAssignmentOperationStatusDtoTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): AccountAssignmentOperationStatusDtoTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccountAssignmentOperationStatusDtoPrincipalTypeEnum {
    USER = 'USER',
    GROUP = 'GROUP'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountAssignmentOperationStatusDtoStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountAssignmentOperationStatusDtoTargetTypeEnum {
    ACCOUNT = 'ACCOUNT'
}
