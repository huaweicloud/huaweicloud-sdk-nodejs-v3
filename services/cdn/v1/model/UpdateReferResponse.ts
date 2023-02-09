import { RefererRsp } from './RefererRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateReferResponse extends SdkResponse {
    public referer?: RefererRsp;
    public constructor() { 
        super();
    }
    public withReferer(referer: RefererRsp): UpdateReferResponse {
        this['referer'] = referer;
        return this;
    }
}