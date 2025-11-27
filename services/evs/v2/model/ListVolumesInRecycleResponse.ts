import { RecycleBinVolume } from './RecycleBinVolume';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVolumesInRecycleResponse extends SdkResponse {
    public count?: number;
    public volumes?: Array<RecycleBinVolume>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListVolumesInRecycleResponse {
        this['count'] = count;
        return this;
    }
    public withVolumes(volumes: Array<RecycleBinVolume>): ListVolumesInRecycleResponse {
        this['volumes'] = volumes;
        return this;
    }
}