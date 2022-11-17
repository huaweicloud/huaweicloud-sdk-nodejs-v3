import { Instances } from './Instances';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceResponse extends SdkResponse {
    private 'order_id'?: string | undefined;
    public instances?: Array<Instances>;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withInstances(instances: Array<Instances>): CreateInstanceResponse {
        this['instances'] = instances;
        return this;
    }
}