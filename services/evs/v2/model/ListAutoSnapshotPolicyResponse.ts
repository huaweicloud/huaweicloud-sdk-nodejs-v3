import { GetSnapshotPolicy } from './GetSnapshotPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoSnapshotPolicyResponse extends SdkResponse {
    private 'snapshot_policies'?: Array<GetSnapshotPolicy>;
    public constructor() { 
        super();
    }
    public withSnapshotPolicies(snapshotPolicies: Array<GetSnapshotPolicy>): ListAutoSnapshotPolicyResponse {
        this['snapshot_policies'] = snapshotPolicies;
        return this;
    }
    public set snapshotPolicies(snapshotPolicies: Array<GetSnapshotPolicy>  | undefined) {
        this['snapshot_policies'] = snapshotPolicies;
    }
    public get snapshotPolicies(): Array<GetSnapshotPolicy> | undefined {
        return this['snapshot_policies'];
    }
}