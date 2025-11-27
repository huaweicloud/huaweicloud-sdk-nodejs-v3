import { CapacityOrderResponseData } from './CapacityOrderResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCapacityOrderResponse extends SdkResponse {
    public data?: Array<CapacityOrderResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<CapacityOrderResponseData>): ListCapacityOrderResponse {
        this['data'] = data;
        return this;
    }
}