import { InterfaceAttachment } from './InterfaceAttachment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerInterfacesResponse extends SdkResponse {
    public interfaceAttachments?: Array<InterfaceAttachment>;
    public constructor() { 
        super();
    }
    public withInterfaceAttachments(interfaceAttachments: Array<InterfaceAttachment>): ListServerInterfacesResponse {
        this['interfaceAttachments'] = interfaceAttachments;
        return this;
    }
}