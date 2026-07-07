import { EventJobResult } from './EventJobResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchExecuteEventsResponse extends SdkResponse {
    public results?: Array<EventJobResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<EventJobResult>): BatchExecuteEventsResponse {
        this['results'] = results;
        return this;
    }
}