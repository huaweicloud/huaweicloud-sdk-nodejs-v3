import { GetSnapshotPolicy } from './GetSnapshotPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutoSnapshotPolicyResponse extends SdkResponse {
    private 'snapshot_policy'?: GetSnapshotPolicy;
    public constructor() { 
        super();
    }
    public withSnapshotPolicy(snapshotPolicy: GetSnapshotPolicy): CreateAutoSnapshotPolicyResponse {
        this['snapshot_policy'] = snapshotPolicy;
        return this;
    }
    public set snapshotPolicy(snapshotPolicy: GetSnapshotPolicy  | undefined) {
        this['snapshot_policy'] = snapshotPolicy;
    }
    public get snapshotPolicy(): GetSnapshotPolicy | undefined {
        return this['snapshot_policy'];
    }
}