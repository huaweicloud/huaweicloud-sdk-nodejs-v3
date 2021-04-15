import { PublicipShowResp } from './PublicipShowResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicipsResponse extends SdkResponse {
    public publicips?: Array<PublicipShowResp>;
    public constructor() { 
        super();
    }
    public withPublicips(publicips: Array<PublicipShowResp>): ListPublicipsResponse {
        this['publicips'] = publicips;
        return this;
    }
}