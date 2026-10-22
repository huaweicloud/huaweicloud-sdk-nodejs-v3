import { UpdateSnapshotPolicy } from './UpdateSnapshotPolicy';


export class UpdateSnapshotPolicyRequestBody {
    private 'snapshot_policy'?: UpdateSnapshotPolicy;
    public constructor() { 
    }
    public withSnapshotPolicy(snapshotPolicy: UpdateSnapshotPolicy): UpdateSnapshotPolicyRequestBody {
        this['snapshot_policy'] = snapshotPolicy;
        return this;
    }
    public set snapshotPolicy(snapshotPolicy: UpdateSnapshotPolicy  | undefined) {
        this['snapshot_policy'] = snapshotPolicy;
    }
    public get snapshotPolicy(): UpdateSnapshotPolicy | undefined {
        return this['snapshot_policy'];
    }
}