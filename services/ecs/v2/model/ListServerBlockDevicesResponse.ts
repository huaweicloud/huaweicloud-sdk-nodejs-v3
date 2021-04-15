import { BlockDeviceAttachableQuantity } from './BlockDeviceAttachableQuantity';
import { ServerBlockDevice } from './ServerBlockDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerBlockDevicesResponse extends SdkResponse {
    public attachableQuantity?: BlockDeviceAttachableQuantity;
    public volumeAttachments?: Array<ServerBlockDevice>;
    public constructor() { 
        super();
    }
    public withAttachableQuantity(attachableQuantity: BlockDeviceAttachableQuantity): ListServerBlockDevicesResponse {
        this['attachableQuantity'] = attachableQuantity;
        return this;
    }
    public withVolumeAttachments(volumeAttachments: Array<ServerBlockDevice>): ListServerBlockDevicesResponse {
        this['volumeAttachments'] = volumeAttachments;
        return this;
    }
}