import { AttachableQuantityForNic } from './AttachableQuantityForNic';
import { InterfaceExt } from './InterfaceExt';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerAttachableNicNumResponse extends SdkResponse {
    public attachableQuantity?: AttachableQuantityForNic;
    public interfaceAttachments?: Array<InterfaceExt>;
    public constructor() { 
        super();
    }
    public withAttachableQuantity(attachableQuantity: AttachableQuantityForNic): ShowServerAttachableNicNumResponse {
        this['attachableQuantity'] = attachableQuantity;
        return this;
    }
    public withInterfaceAttachments(interfaceAttachments: Array<InterfaceExt>): ShowServerAttachableNicNumResponse {
        this['interfaceAttachments'] = interfaceAttachments;
        return this;
    }
}