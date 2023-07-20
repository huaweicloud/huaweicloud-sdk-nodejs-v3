import { PublicipCreateResp } from './PublicipCreateResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrePaidPublicipResponse extends SdkResponse {
    public publicip?: PublicipCreateResp;
    private 'order_id'?: string;
    private 'publicip_id'?: string;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipCreateResp): CreatePrePaidPublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
    public withOrderId(orderId: string): CreatePrePaidPublicipResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withPublicipId(publicipId: string): CreatePrePaidPublicipResponse {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
}