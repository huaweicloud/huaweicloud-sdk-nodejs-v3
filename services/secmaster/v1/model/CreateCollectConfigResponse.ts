import { ConfigResponse } from './ConfigResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCollectConfigResponse extends SdkResponse {
    public body?: Array<ConfigResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConfigResponse>): CreateCollectConfigResponse {
        this['body'] = body;
        return this;
    }
}