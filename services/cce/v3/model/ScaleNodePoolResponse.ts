
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ScaleNodePoolResponse extends SdkResponse {
    public orderID?: string;
    public constructor() { 
        super();
    }
    public withOrderID(orderID: string): ScaleNodePoolResponse {
        this['orderID'] = orderID;
        return this;
    }
}