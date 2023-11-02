import { CrossRegionSnapshotConfig } from './CrossRegionSnapshotConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotCrossRegionPolicyResponse extends SdkResponse {
    private 'cross_region_configs'?: Array<CrossRegionSnapshotConfig>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withCrossRegionConfigs(crossRegionConfigs: Array<CrossRegionSnapshotConfig>): ListSnapshotCrossRegionPolicyResponse {
        this['cross_region_configs'] = crossRegionConfigs;
        return this;
    }
    public set crossRegionConfigs(crossRegionConfigs: Array<CrossRegionSnapshotConfig>  | undefined) {
        this['cross_region_configs'] = crossRegionConfigs;
    }
    public get crossRegionConfigs(): Array<CrossRegionSnapshotConfig> | undefined {
        return this['cross_region_configs'];
    }
    public withCount(count: number): ListSnapshotCrossRegionPolicyResponse {
        this['count'] = count;
        return this;
    }
}