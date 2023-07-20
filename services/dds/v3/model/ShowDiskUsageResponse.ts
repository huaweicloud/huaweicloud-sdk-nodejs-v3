import { DiskVolumes } from './DiskVolumes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiskUsageResponse extends SdkResponse {
    public volumes?: Array<DiskVolumes>;
    public constructor() { 
        super();
    }
    public withVolumes(volumes: Array<DiskVolumes>): ShowDiskUsageResponse {
        this['volumes'] = volumes;
        return this;
    }
}