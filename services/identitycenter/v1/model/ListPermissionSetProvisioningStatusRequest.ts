

export class ListPermissionSetProvisioningStatusRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public marker?: string;
    public status?: ListPermissionSetProvisioningStatusRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListPermissionSetProvisioningStatusRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListPermissionSetProvisioningStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListPermissionSetProvisioningStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPermissionSetProvisioningStatusRequest {
        this['marker'] = marker;
        return this;
    }
    public withStatus(status: ListPermissionSetProvisioningStatusRequestStatusEnum | string): ListPermissionSetProvisioningStatusRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPermissionSetProvisioningStatusRequestStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}
