import { PermissionSetProvisioningStatusDto } from './PermissionSetProvisioningStatusDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ProvisionPermissionSetResponse extends SdkResponse {
    private 'permission_set_provisioning_status'?: PermissionSetProvisioningStatusDto;
    public constructor() { 
        super();
    }
    public withPermissionSetProvisioningStatus(permissionSetProvisioningStatus: PermissionSetProvisioningStatusDto): ProvisionPermissionSetResponse {
        this['permission_set_provisioning_status'] = permissionSetProvisioningStatus;
        return this;
    }
    public set permissionSetProvisioningStatus(permissionSetProvisioningStatus: PermissionSetProvisioningStatusDto  | undefined) {
        this['permission_set_provisioning_status'] = permissionSetProvisioningStatus;
    }
    public get permissionSetProvisioningStatus(): PermissionSetProvisioningStatusDto | undefined {
        return this['permission_set_provisioning_status'];
    }
}