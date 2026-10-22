import { SnapshotDetailV5 } from './SnapshotDetailV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotsDetailsResponse extends SdkResponse {
    public snapshots?: Array<SnapshotDetailV5>;
    public constructor() { 
        super();
    }
    public withSnapshots(snapshots: Array<SnapshotDetailV5>): ListSnapshotsDetailsResponse {
        this['snapshots'] = snapshots;
        return this;
    }
}