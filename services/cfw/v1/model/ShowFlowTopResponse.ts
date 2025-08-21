import { ItemVO } from './ItemVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowTopResponse extends SdkResponse {
    public data?: { [key: string]: Array<ItemVO>; };
    public constructor() { 
        super();
    }
    public withData(data: { [key: string]: Array<ItemVO>; }): ShowFlowTopResponse {
        this['data'] = data;
        return this;
    }
}