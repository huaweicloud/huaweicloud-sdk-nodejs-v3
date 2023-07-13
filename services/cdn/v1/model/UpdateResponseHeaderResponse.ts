import { HeaderMap } from './HeaderMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateResponseHeaderResponse extends SdkResponse {
    public headers?: HeaderMap;
    public constructor() { 
        super();
    }
    public withHeaders(headers: HeaderMap): UpdateResponseHeaderResponse {
        this['headers'] = headers;
        return this;
    }
}