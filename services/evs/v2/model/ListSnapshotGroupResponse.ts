import { SnapshotGroupDetail } from './SnapshotGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotGroupResponse extends SdkResponse {
    private 'snapshot_groups'?: Array<SnapshotGroupDetail>;
    public constructor() { 
        super();
    }
    public withSnapshotGroups(snapshotGroups: Array<SnapshotGroupDetail>): ListSnapshotGroupResponse {
        this['snapshot_groups'] = snapshotGroups;
        return this;
    }
    public set snapshotGroups(snapshotGroups: Array<SnapshotGroupDetail>  | undefined) {
        this['snapshot_groups'] = snapshotGroups;
    }
    public get snapshotGroups(): Array<SnapshotGroupDetail> | undefined {
        return this['snapshot_groups'];
    }
}