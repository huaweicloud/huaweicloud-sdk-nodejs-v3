
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandGaussMySqlInstanceVolumeResponse extends SdkResponse {
    public size?: number;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withSize(size: number): ExpandGaussMySqlInstanceVolumeResponse {
        this['size'] = size;
        return this;
    }
    public withOrderId(orderId: string): ExpandGaussMySqlInstanceVolumeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}