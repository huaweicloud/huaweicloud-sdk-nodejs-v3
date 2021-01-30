import { ServicePolicyRoleResult } from './ServicePolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCloudServiceCustomPolicyResponse extends SdkResponse {
    public role?: ServicePolicyRoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: ServicePolicyRoleResult): UpdateCloudServiceCustomPolicyResponse {
        this['role'] = role;
        return this;
    }
}