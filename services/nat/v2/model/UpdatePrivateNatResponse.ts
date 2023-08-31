import { PrivateNat } from './PrivateNat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivateNatResponse extends SdkResponse {
    public gateway?: PrivateNat;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withGateway(gateway: PrivateNat): UpdatePrivateNatResponse {
        this['gateway'] = gateway;
        return this;
    }
    public withRequestId(requestId: string): UpdatePrivateNatResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}