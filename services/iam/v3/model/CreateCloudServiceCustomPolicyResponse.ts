import { ServicePolicyRoleResult } from './ServicePolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCloudServiceCustomPolicyResponse extends SdkResponse {
    public role?: ServicePolicyRoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: ServicePolicyRoleResult): CreateCloudServiceCustomPolicyResponse {
        this['role'] = role;
        return this;
    }
}