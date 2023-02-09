import { HttpInfoResponseBody } from './HttpInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHttpsInfoResponse extends SdkResponse {
    public https?: HttpInfoResponseBody;
    public constructor() { 
        super();
    }
    public withHttps(https: HttpInfoResponseBody): UpdateHttpsInfoResponse {
        this['https'] = https;
        return this;
    }
}