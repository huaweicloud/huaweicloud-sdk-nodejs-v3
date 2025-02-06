import { PageInfoDto } from './PageInfoDto';
import { PermissionSetProvisioningStatusMetadataDto } from './PermissionSetProvisioningStatusMetadataDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionSetProvisioningStatusResponse extends SdkResponse {
    private 'permission_sets_provisioning_status'?: Array<PermissionSetProvisioningStatusMetadataDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withPermissionSetsProvisioningStatus(permissionSetsProvisioningStatus: Array<PermissionSetProvisioningStatusMetadataDto>): ListPermissionSetProvisioningStatusResponse {
        this['permission_sets_provisioning_status'] = permissionSetsProvisioningStatus;
        return this;
    }
    public set permissionSetsProvisioningStatus(permissionSetsProvisioningStatus: Array<PermissionSetProvisioningStatusMetadataDto>  | undefined) {
        this['permission_sets_provisioning_status'] = permissionSetsProvisioningStatus;
    }
    public get permissionSetsProvisioningStatus(): Array<PermissionSetProvisioningStatusMetadataDto> | undefined {
        return this['permission_sets_provisioning_status'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListPermissionSetProvisioningStatusResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}