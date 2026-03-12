
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCertificateAuthorityOrderResponse extends SdkResponse {
    private 'order_id'?: string;
    private 'ca_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): CreateCertificateAuthorityOrderResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withCaIds(caIds: Array<string>): CreateCertificateAuthorityOrderResponse {
        this['ca_ids'] = caIds;
        return this;
    }
    public set caIds(caIds: Array<string>  | undefined) {
        this['ca_ids'] = caIds;
    }
    public get caIds(): Array<string> | undefined {
        return this['ca_ids'];
    }
}