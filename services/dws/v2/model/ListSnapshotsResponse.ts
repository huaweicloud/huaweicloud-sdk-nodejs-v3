import { Snapshots } from './Snapshots';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotsResponse extends SdkResponse {
    public snapshots?: Array<Snapshots>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withSnapshots(snapshots: Array<Snapshots>): ListSnapshotsResponse {
        this['snapshots'] = snapshots;
        return this;
    }
    public withCount(count: number): ListSnapshotsResponse {
        this['count'] = count;
        return this;
    }
}