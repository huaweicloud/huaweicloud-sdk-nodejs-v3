import { ServerVolumeAttachment } from './ServerVolumeAttachment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerVolumeAttachmentsResponse extends SdkResponse {
    public volumeAttachments?: Array<ServerVolumeAttachment>;
    public constructor() { 
        super();
    }
    public withVolumeAttachments(volumeAttachments: Array<ServerVolumeAttachment>): ListServerVolumeAttachmentsResponse {
        this['volumeAttachments'] = volumeAttachments;
        return this;
    }
}