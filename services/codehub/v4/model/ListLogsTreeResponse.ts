import { LogTreeDto } from './LogTreeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogsTreeResponse extends SdkResponse {
    public body?: Array<LogTreeDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LogTreeDto>): ListLogsTreeResponse {
        this['body'] = body;
        return this;
    }
}