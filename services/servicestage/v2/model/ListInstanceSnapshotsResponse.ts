import { InstanceSnapshotView } from './InstanceSnapshotView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSnapshotsResponse extends SdkResponse {
    public count?: number;
    public snapshots?: Array<InstanceSnapshotView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstanceSnapshotsResponse {
        this['count'] = count;
        return this;
    }
    public withSnapshots(snapshots: Array<InstanceSnapshotView>): ListInstanceSnapshotsResponse {
        this['snapshots'] = snapshots;
        return this;
    }
}