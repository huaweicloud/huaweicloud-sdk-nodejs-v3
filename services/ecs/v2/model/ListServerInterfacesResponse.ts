import { InterfaceAttachableQuantity } from './InterfaceAttachableQuantity';
import { InterfaceAttachment } from './InterfaceAttachment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerInterfacesResponse extends SdkResponse {
    public attachableQuantity?: InterfaceAttachableQuantity;
    public interfaceAttachments?: Array<InterfaceAttachment>;
    public constructor() { 
        super();
    }
    public withAttachableQuantity(attachableQuantity: InterfaceAttachableQuantity): ListServerInterfacesResponse {
        this['attachableQuantity'] = attachableQuantity;
        return this;
    }
    public withInterfaceAttachments(interfaceAttachments: Array<InterfaceAttachment>): ListServerInterfacesResponse {
        this['interfaceAttachments'] = interfaceAttachments;
        return this;
    }
}