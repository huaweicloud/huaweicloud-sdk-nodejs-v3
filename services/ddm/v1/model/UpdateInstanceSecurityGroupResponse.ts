
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceSecurityGroupResponse extends SdkResponse {
    private 'security_group_id'?: string;
    public constructor() { 
        super();
    }
    public withSecurityGroupId(securityGroupId: string): UpdateInstanceSecurityGroupResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
}