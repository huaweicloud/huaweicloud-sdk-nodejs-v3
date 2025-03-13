import { PermissionResourcePolicy } from './PermissionResourcePolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityResourcePermissionsResponse extends SdkResponse {
    public total?: number;
    public policies?: Array<PermissionResourcePolicy>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityResourcePermissionsResponse {
        this['total'] = total;
        return this;
    }
    public withPolicies(policies: Array<PermissionResourcePolicy>): ListSecurityResourcePermissionsResponse {
        this['policies'] = policies;
        return this;
    }
}