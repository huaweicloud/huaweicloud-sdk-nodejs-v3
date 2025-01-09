import { VolumeProductInfo } from './VolumeProductInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVolumeProductInfoResponse extends SdkResponse {
    public volumes?: Array<VolumeProductInfo>;
    public constructor() { 
        super();
    }
    public withVolumes(volumes: Array<VolumeProductInfo>): ListVolumeProductInfoResponse {
        this['volumes'] = volumes;
        return this;
    }
}