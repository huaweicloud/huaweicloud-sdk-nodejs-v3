import { UpdateSnapshotGroupResponseBody } from './UpdateSnapshotGroupResponseBody';


export class UpdateSnapshotGroupRequestBody {
    private 'snapshot_group'?: UpdateSnapshotGroupResponseBody;
    public constructor(snapshotGroup?: UpdateSnapshotGroupResponseBody) { 
        this['snapshot_group'] = snapshotGroup;
    }
    public withSnapshotGroup(snapshotGroup: UpdateSnapshotGroupResponseBody): UpdateSnapshotGroupRequestBody {
        this['snapshot_group'] = snapshotGroup;
        return this;
    }
    public set snapshotGroup(snapshotGroup: UpdateSnapshotGroupResponseBody  | undefined) {
        this['snapshot_group'] = snapshotGroup;
    }
    public get snapshotGroup(): UpdateSnapshotGroupResponseBody | undefined {
        return this['snapshot_group'];
    }
}