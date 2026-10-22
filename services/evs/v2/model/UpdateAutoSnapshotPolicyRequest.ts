import { UpdateSnapshotPolicyRequestBody } from './UpdateSnapshotPolicyRequestBody';


export class UpdateAutoSnapshotPolicyRequest {
    private 'snapshot_policy_id'?: string;
    public body?: UpdateSnapshotPolicyRequestBody;
    public constructor(snapshotPolicyId?: string) { 
        this['snapshot_policy_id'] = snapshotPolicyId;
    }
    public withSnapshotPolicyId(snapshotPolicyId: string): UpdateAutoSnapshotPolicyRequest {
        this['snapshot_policy_id'] = snapshotPolicyId;
        return this;
    }
    public set snapshotPolicyId(snapshotPolicyId: string  | undefined) {
        this['snapshot_policy_id'] = snapshotPolicyId;
    }
    public get snapshotPolicyId(): string | undefined {
        return this['snapshot_policy_id'];
    }
    public withBody(body: UpdateSnapshotPolicyRequestBody): UpdateAutoSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}