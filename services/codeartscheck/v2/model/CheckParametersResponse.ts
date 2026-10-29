import { TaskCheckParameters } from './TaskCheckParameters';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckParametersResponse extends SdkResponse {
    public body?: Array<TaskCheckParameters>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TaskCheckParameters>): CheckParametersResponse {
        this['body'] = body;
        return this;
    }
}