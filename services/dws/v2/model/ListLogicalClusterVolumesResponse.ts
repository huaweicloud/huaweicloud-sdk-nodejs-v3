import { LogicalClusterVolume } from './LogicalClusterVolume';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogicalClusterVolumesResponse extends SdkResponse {
    public volumes?: Array<LogicalClusterVolume>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withVolumes(volumes: Array<LogicalClusterVolume>): ListLogicalClusterVolumesResponse {
        this['volumes'] = volumes;
        return this;
    }
    public withCount(count: number): ListLogicalClusterVolumesResponse {
        this['count'] = count;
        return this;
    }
}