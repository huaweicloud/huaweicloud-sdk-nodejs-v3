import { AgencyPolicyRoleResult } from './AgencyPolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAgencyCustomPolicyResponse extends SdkResponse {
    public role?: AgencyPolicyRoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: AgencyPolicyRoleResult): UpdateAgencyCustomPolicyResponse {
        this['role'] = role;
        return this;
    }
}