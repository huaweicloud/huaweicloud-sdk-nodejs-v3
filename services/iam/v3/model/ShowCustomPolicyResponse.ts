import { PolicyRoleResult } from './PolicyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCustomPolicyResponse extends SdkResponse {
    public role?: PolicyRoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: PolicyRoleResult): ShowCustomPolicyResponse {
        this['role'] = role;
        return this;
    }
}