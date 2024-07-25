import { ShowMetricResultResponseBody } from './ShowMetricResultResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSearchMetricHitsResponse extends SdkResponse {
    public body?: Array<ShowMetricResultResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowMetricResultResponseBody>): BatchSearchMetricHitsResponse {
        this['body'] = body;
        return this;
    }
}