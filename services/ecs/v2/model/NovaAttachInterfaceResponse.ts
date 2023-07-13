import { NovaServerInterfaceDetail } from './NovaServerInterfaceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaAttachInterfaceResponse extends SdkResponse {
    public interfaceAttachment?: NovaServerInterfaceDetail;
    public constructor() { 
        super();
    }
    public withInterfaceAttachment(interfaceAttachment: NovaServerInterfaceDetail): NovaAttachInterfaceResponse {
        this['interfaceAttachment'] = interfaceAttachment;
        return this;
    }
}