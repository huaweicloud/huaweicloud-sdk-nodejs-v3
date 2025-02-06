

export class PermissionSetProvisioningStatusDto {
    private 'account_id'?: string;
    private 'created_date'?: string;
    private 'failure_reason'?: string;
    private 'permission_set_id'?: string;
    private 'request_id'?: string;
    public status?: PermissionSetProvisioningStatusDtoStatusEnum | string;
    public constructor() { 
    }
    public withAccountId(accountId: string): PermissionSetProvisioningStatusDto {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withCreatedDate(createdDate: string): PermissionSetProvisioningStatusDto {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withFailureReason(failureReason: string): PermissionSetProvisioningStatusDto {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
    public withPermissionSetId(permissionSetId: string): PermissionSetProvisioningStatusDto {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withRequestId(requestId: string): PermissionSetProvisioningStatusDto {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withStatus(status: PermissionSetProvisioningStatusDtoStatusEnum | string): PermissionSetProvisioningStatusDto {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetProvisioningStatusDtoStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
