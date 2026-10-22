import { SnapshotGroup } from './SnapshotGroup';


export class CreateSnapshotGroupRequestBody {
    private 'snapshot_group'?: SnapshotGroup;
    public constructor(snapshotGroup?: SnapshotGroup) { 
        this['snapshot_group'] = snapshotGroup;
    }
    public withSnapshotGroup(snapshotGroup: SnapshotGroup): CreateSnapshotGroupRequestBody {
        this['snapshot_group'] = snapshotGroup;
        return this;
    }
    public set snapshotGroup(snapshotGroup: SnapshotGroup  | undefined) {
        this['snapshot_group'] = snapshotGroup;
    }
    public get snapshotGroup(): SnapshotGroup | undefined {
        return this['snapshot_group'];
    }
}