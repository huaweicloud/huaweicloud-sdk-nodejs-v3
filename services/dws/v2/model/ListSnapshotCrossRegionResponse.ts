import { SnapshotRegion } from './SnapshotRegion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotCrossRegionResponse extends SdkResponse {
    public regions?: Array<SnapshotRegion>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withRegions(regions: Array<SnapshotRegion>): ListSnapshotCrossRegionResponse {
        this['regions'] = regions;
        return this;
    }
    public withCount(count: number): ListSnapshotCrossRegionResponse {
        this['count'] = count;
        return this;
    }
}