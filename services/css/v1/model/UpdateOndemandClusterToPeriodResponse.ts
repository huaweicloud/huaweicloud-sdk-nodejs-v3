
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOndemandClusterToPeriodResponse extends SdkResponse {
    public orderId?: string;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): UpdateOndemandClusterToPeriodResponse {
        this['orderId'] = orderId;
        return this;
    }
}