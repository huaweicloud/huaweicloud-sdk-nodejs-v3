import { ServerBlockDevice } from './ServerBlockDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerBlockDeviceResponse extends SdkResponse {
    public volumeAttachment?: ServerBlockDevice;
    public constructor() { 
        super();
    }
    public withVolumeAttachment(volumeAttachment: ServerBlockDevice): ShowServerBlockDeviceResponse {
        this['volumeAttachment'] = volumeAttachment;
        return this;
    }
}