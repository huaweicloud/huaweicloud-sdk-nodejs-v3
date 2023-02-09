import { HeaderMap } from './HeaderMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResponseHeaderResponse extends SdkResponse {
    public headers?: HeaderMap;
    public constructor() { 
        super();
    }
    public withHeaders(headers: HeaderMap): ShowResponseHeaderResponse {
        this['headers'] = headers;
        return this;
    }
}