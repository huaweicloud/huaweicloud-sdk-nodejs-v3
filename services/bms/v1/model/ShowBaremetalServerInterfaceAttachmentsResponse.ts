import { InterfaceAttachments } from './InterfaceAttachments';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaremetalServerInterfaceAttachmentsResponse extends SdkResponse {
    public interfaceAttachments?: Array<InterfaceAttachments>;
    public constructor() { 
        super();
    }
    public withInterfaceAttachments(interfaceAttachments: Array<InterfaceAttachments>): ShowBaremetalServerInterfaceAttachmentsResponse {
        this['interfaceAttachments'] = interfaceAttachments;
        return this;
    }
}