
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryPermissionInheritEnabledResponse extends SdkResponse {
    private 'inherit_parent_permission'?: boolean;
    public constructor() { 
        super();
    }
    public withInheritParentPermission(inheritParentPermission: boolean): UpdateRepositoryPermissionInheritEnabledResponse {
        this['inherit_parent_permission'] = inheritParentPermission;
        return this;
    }
    public set inheritParentPermission(inheritParentPermission: boolean  | undefined) {
        this['inherit_parent_permission'] = inheritParentPermission;
    }
    public get inheritParentPermission(): boolean | undefined {
        return this['inherit_parent_permission'];
    }
}