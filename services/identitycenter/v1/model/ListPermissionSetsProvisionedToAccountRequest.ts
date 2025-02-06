

export class ListPermissionSetsProvisionedToAccountRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'account_id'?: string;
    private 'provisioning_status'?: ListPermissionSetsProvisionedToAccountRequestProvisioningStatusEnum | string;
    public constructor(instanceId?: string, accountId?: string) { 
        this['instance_id'] = instanceId;
        this['account_id'] = accountId;
    }
    public withXSecurityToken(xSecurityToken: string): ListPermissionSetsProvisionedToAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListPermissionSetsProvisionedToAccountRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListPermissionSetsProvisionedToAccountRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPermissionSetsProvisionedToAccountRequest {
        this['marker'] = marker;
        return this;
    }
    public withAccountId(accountId: string): ListPermissionSetsProvisionedToAccountRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withProvisioningStatus(provisioningStatus: ListPermissionSetsProvisionedToAccountRequestProvisioningStatusEnum | string): ListPermissionSetsProvisionedToAccountRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: ListPermissionSetsProvisionedToAccountRequestProvisioningStatusEnum | string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): ListPermissionSetsProvisionedToAccountRequestProvisioningStatusEnum | string | undefined {
        return this['provisioning_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPermissionSetsProvisionedToAccountRequestProvisioningStatusEnum {
    LATEST_PERMISSION_SET_PROVISIONED = 'LATEST_PERMISSION_SET_PROVISIONED',
    LATEST_PERMISSION_SET_NOT_PROVISIONED = 'LATEST_PERMISSION_SET_NOT_PROVISIONED'
}
