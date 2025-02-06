
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetCustomRoleForPermissionSetResponse extends SdkResponse {
    private 'custom_role'?: string;
    public constructor() { 
        super();
    }
    public withCustomRole(customRole: string): GetCustomRoleForPermissionSetResponse {
        this['custom_role'] = customRole;
        return this;
    }
    public set customRole(customRole: string  | undefined) {
        this['custom_role'] = customRole;
    }
    public get customRole(): string | undefined {
        return this['custom_role'];
    }
}