import { PermissionApprovalOpenapiDTO } from './PermissionApprovalOpenapiDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityApprovalsResponse extends SdkResponse {
    public approvals?: Array<PermissionApprovalOpenapiDTO>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withApprovals(approvals: Array<PermissionApprovalOpenapiDTO>): ListSecurityApprovalsResponse {
        this['approvals'] = approvals;
        return this;
    }
    public withTotal(total: number): ListSecurityApprovalsResponse {
        this['total'] = total;
        return this;
    }
}