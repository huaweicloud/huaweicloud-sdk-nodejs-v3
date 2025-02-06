import { PermissionSetDto } from './PermissionSetDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePermissionSetResponse extends SdkResponse {
    private 'permission_set'?: PermissionSetDto;
    public constructor() { 
        super();
    }
    public withPermissionSet(permissionSet: PermissionSetDto): CreatePermissionSetResponse {
        this['permission_set'] = permissionSet;
        return this;
    }
    public set permissionSet(permissionSet: PermissionSetDto  | undefined) {
        this['permission_set'] = permissionSet;
    }
    public get permissionSet(): PermissionSetDto | undefined {
        return this['permission_set'];
    }
}