import { QueryAppLogResult } from './QueryAppLogResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskLogsResponse extends SdkResponse {
    public result?: QueryAppLogResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: QueryAppLogResult): ShowTaskLogsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowTaskLogsResponse {
        this['status'] = status;
        return this;
    }
}