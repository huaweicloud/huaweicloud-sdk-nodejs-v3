import { ConfigInfo } from './ConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExecutionParamsResponse extends SdkResponse {
    public body?: Array<ConfigInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ConfigInfo>): ShowExecutionParamsResponse {
        this['body'] = body;
        return this;
    }
}