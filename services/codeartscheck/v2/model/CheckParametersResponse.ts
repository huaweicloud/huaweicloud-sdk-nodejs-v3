import { TaskCheckParamters } from './TaskCheckParamters';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckParametersResponse extends SdkResponse {
    public body?: Array<TaskCheckParamters>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TaskCheckParamters>): CheckParametersResponse {
        this['body'] = body;
        return this;
    }
}