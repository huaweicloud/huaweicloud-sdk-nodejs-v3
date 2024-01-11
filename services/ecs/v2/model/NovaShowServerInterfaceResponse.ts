import { NovaServerInterfaceDetail } from './NovaServerInterfaceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaShowServerInterfaceResponse extends SdkResponse {
    public interfaceAttachment?: NovaServerInterfaceDetail;
    public constructor() { 
        super();
    }
    public withInterfaceAttachment(interfaceAttachment: NovaServerInterfaceDetail): NovaShowServerInterfaceResponse {
        this['interfaceAttachment'] = interfaceAttachment;
        return this;
    }
}