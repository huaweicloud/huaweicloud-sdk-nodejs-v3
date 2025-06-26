import { ReplicationPolicy } from './ReplicationPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceReplicationPoliciesResponse extends SdkResponse {
    public policies?: Array<ReplicationPolicy>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<ReplicationPolicy>): ListInstanceReplicationPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withTotal(total: number): ListInstanceReplicationPoliciesResponse {
        this['total'] = total;
        return this;
    }
}