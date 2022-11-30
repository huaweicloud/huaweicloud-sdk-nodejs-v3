import { PublicipUpdateResp } from './PublicipUpdateResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePublicipResponse extends SdkResponse {
    public publicip?: PublicipUpdateResp;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicipUpdateResp): UpdatePublicipResponse {
        this['publicip'] = publicip;
        return this;
    }
}