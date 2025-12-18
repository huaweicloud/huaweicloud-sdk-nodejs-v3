import { CollectedWdrSnapshotInfoResult } from './CollectedWdrSnapshotInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWdrSnapshotsCollectResultsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'wdr_snapshots'?: Array<CollectedWdrSnapshotInfoResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListWdrSnapshotsCollectResultsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withWdrSnapshots(wdrSnapshots: Array<CollectedWdrSnapshotInfoResult>): ListWdrSnapshotsCollectResultsResponse {
        this['wdr_snapshots'] = wdrSnapshots;
        return this;
    }
    public set wdrSnapshots(wdrSnapshots: Array<CollectedWdrSnapshotInfoResult>  | undefined) {
        this['wdr_snapshots'] = wdrSnapshots;
    }
    public get wdrSnapshots(): Array<CollectedWdrSnapshotInfoResult> | undefined {
        return this['wdr_snapshots'];
    }
}