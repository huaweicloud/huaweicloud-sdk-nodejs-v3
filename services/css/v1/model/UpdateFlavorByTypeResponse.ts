
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFlavorByTypeResponse extends SdkResponse {
    public orderId?: string;
    public clusterId?: string;
    public changeMode?: number;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): UpdateFlavorByTypeResponse {
        this['orderId'] = orderId;
        return this;
    }
    public withClusterId(clusterId: string): UpdateFlavorByTypeResponse {
        this['clusterId'] = clusterId;
        return this;
    }
    public withChangeMode(changeMode: number): UpdateFlavorByTypeResponse {
        this['changeMode'] = changeMode;
        return this;
    }
}