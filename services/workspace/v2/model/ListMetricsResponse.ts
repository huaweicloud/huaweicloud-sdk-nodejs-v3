import { Metric } from './Metric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsResponse extends SdkResponse {
    public body?: Array<Metric>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Metric>): ListMetricsResponse {
        this['body'] = body;
        return this;
    }
}