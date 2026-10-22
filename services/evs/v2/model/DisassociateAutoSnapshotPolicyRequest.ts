

export class DisassociateAutoSnapshotPolicyRequest {
    private 'snapshot_policy_id'?: string;
    public body?: Array<string>;
    public constructor(snapshotPolicyId?: string) { 
        this['snapshot_policy_id'] = snapshotPolicyId;
    }
    public withSnapshotPolicyId(snapshotPolicyId: string): DisassociateAutoSnapshotPolicyRequest {
        this['snapshot_policy_id'] = snapshotPolicyId;
        return this;
    }
    public set snapshotPolicyId(snapshotPolicyId: string  | undefined) {
        this['snapshot_policy_id'] = snapshotPolicyId;
    }
    public get snapshotPolicyId(): string | undefined {
        return this['snapshot_policy_id'];
    }
    public withBody(body: Array<string>): DisassociateAutoSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}