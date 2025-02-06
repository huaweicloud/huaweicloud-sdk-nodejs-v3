

export class ListAccountsForProvisionedPermissionSetRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    private 'permission_set_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'provisioning_status'?: ListAccountsForProvisionedPermissionSetRequestProvisioningStatusEnum | string;
    public constructor(instanceId?: string, permissionSetId?: string) { 
        this['instance_id'] = instanceId;
        this['permission_set_id'] = permissionSetId;
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountsForProvisionedPermissionSetRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListAccountsForProvisionedPermissionSetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPermissionSetId(permissionSetId: string): ListAccountsForProvisionedPermissionSetRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withLimit(limit: number): ListAccountsForProvisionedPermissionSetRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountsForProvisionedPermissionSetRequest {
        this['marker'] = marker;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: ListAccountsForProvisionedPermissionSetRequestProvisioningStatusEnum | string): ListAccountsForProvisionedPermissionSetRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: ListAccountsForProvisionedPermissionSetRequestProvisioningStatusEnum | string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): ListAccountsForProvisionedPermissionSetRequestProvisioningStatusEnum | string | undefined {
        return this['provisioning_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAccountsForProvisionedPermissionSetRequestProvisioningStatusEnum {
    LATEST_PERMISSION_SET_PROVISIONED = 'LATEST_PERMISSION_SET_PROVISIONED',
    LATEST_PERMISSION_SET_NOT_PROVISIONED = 'LATEST_PERMISSION_SET_NOT_PROVISIONED'
}
