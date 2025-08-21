import { ShowEwAssociatedErRespData } from './ShowEwAssociatedErRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEwAssociatedErResponse extends SdkResponse {
    public data?: ShowEwAssociatedErRespData;
    public constructor() { 
        super();
    }
    public withData(data: ShowEwAssociatedErRespData): ShowEwAssociatedErResponse {
        this['data'] = data;
        return this;
    }
}