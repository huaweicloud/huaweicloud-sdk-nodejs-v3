import { ShowEwAssociatedVpcRespData } from './ShowEwAssociatedVpcRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEwAssociatedVpcResponse extends SdkResponse {
    public data?: ShowEwAssociatedVpcRespData;
    public constructor() { 
        super();
    }
    public withData(data: ShowEwAssociatedVpcRespData): ShowEwAssociatedVpcResponse {
        this['data'] = data;
        return this;
    }
}