import { ShowPolicyRoleResult } from './ShowPolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCustomPolicyResponse extends SdkResponse {
    public role?: ShowPolicyRoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: ShowPolicyRoleResult): ShowCustomPolicyResponse {
        this['role'] = role;
        return this;
    }
}