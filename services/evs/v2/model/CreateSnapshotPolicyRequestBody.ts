import { CreateSnapshotPolicy } from './CreateSnapshotPolicy';


export class CreateSnapshotPolicyRequestBody {
    private 'snapshot_policy'?: CreateSnapshotPolicy;
    public constructor(snapshotPolicy?: CreateSnapshotPolicy) { 
        this['snapshot_policy'] = snapshotPolicy;
    }
    public withSnapshotPolicy(snapshotPolicy: CreateSnapshotPolicy): CreateSnapshotPolicyRequestBody {
        this['snapshot_policy'] = snapshotPolicy;
        return this;
    }
    public set snapshotPolicy(snapshotPolicy: CreateSnapshotPolicy  | undefined) {
        this['snapshot_policy'] = snapshotPolicy;
    }
    public get snapshotPolicy(): CreateSnapshotPolicy | undefined {
        return this['snapshot_policy'];
    }
}