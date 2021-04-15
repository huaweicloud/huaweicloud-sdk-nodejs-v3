import { PublicipShowResp } from './PublicipShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePublicipResponse extends SdkResponse {
    public publicip?: PublicipShowResp;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipShowResp): UpdatePublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}