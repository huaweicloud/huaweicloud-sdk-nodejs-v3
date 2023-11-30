import { PublicipUpdateResp } from './PublicipUpdateResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePublicipResponse extends SdkResponse {
    private 'request_id'?: string;
    public publicip?: PublicipUpdateResp;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdatePublicipResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPublicip(publicip: PublicipUpdateResp): UpdatePublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}