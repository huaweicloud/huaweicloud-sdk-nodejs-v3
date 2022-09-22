import { CountItem } from './CountItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStatisticsResponse extends SdkResponse {
    public body?: Array<CountItem>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CountItem>): ListStatisticsResponse {
        this['body'] = body;
        return this;
    }
}