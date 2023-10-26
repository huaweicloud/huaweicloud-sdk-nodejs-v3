import { ProductOrderInfo } from './ProductOrderInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpecificationResponse extends SdkResponse {
    public orderInfos?: Array<ProductOrderInfo>;
    public constructor() { 
        super();
    }
    public withOrderInfos(orderInfos: Array<ProductOrderInfo>): ShowSpecificationResponse {
        this['orderInfos'] = orderInfos;
        return this;
    }
}