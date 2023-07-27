import { VolumeAttachments } from './VolumeAttachments';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaremetalServerVolumeInfoResponse extends SdkResponse {
    public volumeAttachments?: Array<VolumeAttachments>;
    public constructor() { 
        super();
    }
    public withVolumeAttachments(volumeAttachments: Array<VolumeAttachments>): ShowBaremetalServerVolumeInfoResponse {
        this['volumeAttachments'] = volumeAttachments;
        return this;
    }
}