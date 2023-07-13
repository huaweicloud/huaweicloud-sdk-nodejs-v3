import { HttpInfoResponseBody } from './HttpInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHttpInfoResponse extends SdkResponse {
    public https?: HttpInfoResponseBody;
    public constructor() { 
        super();
    }
    public withHttps(https: HttpInfoResponseBody): ShowHttpInfoResponse {
        this['https'] = https;
        return this;
    }
}