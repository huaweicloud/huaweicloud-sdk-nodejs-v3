import { RecycleBinVolume } from './RecycleBinVolume';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVolumeInRecycleResponse extends SdkResponse {
    public volume?: RecycleBinVolume;
    public constructor() { 
        super();
    }
    public withVolume(volume: RecycleBinVolume): ShowVolumeInRecycleResponse {
        this['volume'] = volume;
        return this;
    }
}