

export class PermissionSetProvisioningStatusMetadataDto {
    private 'created_date'?: number;
    private 'request_id'?: string;
    public status?: PermissionSetProvisioningStatusMetadataDtoStatusEnum | string;
    public constructor() { 
    }
    public withCreatedDate(createdDate: number): PermissionSetProvisioningStatusMetadataDto {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withRequestId(requestId: string): PermissionSetProvisioningStatusMetadataDto {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withStatus(status: PermissionSetProvisioningStatusMetadataDtoStatusEnum | string): PermissionSetProvisioningStatusMetadataDto {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetProvisioningStatusMetadataDtoStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
