import { PublicipShowResp } from './PublicipShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicipResponse extends SdkResponse {
    public publicip?: PublicipShowResp;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipShowResp): ShowPublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}