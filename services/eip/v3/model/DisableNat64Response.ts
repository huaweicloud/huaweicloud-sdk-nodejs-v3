import { PublicipResp } from './PublicipResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableNat64Response extends SdkResponse {
    public publicip?: PublicipResp;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipResp): DisableNat64Response {
        this['publicip'] = publicip;
        return this;
    }
    public withRequestId(requestId: string): DisableNat64Response {
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