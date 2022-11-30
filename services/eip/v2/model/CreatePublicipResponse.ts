import { PublicipCreateResp } from './PublicipCreateResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePublicipResponse extends SdkResponse {
    public publicip?: PublicipCreateResp;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipCreateResp): CreatePublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}