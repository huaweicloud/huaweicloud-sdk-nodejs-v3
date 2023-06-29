import { OpenPageInfo } from './OpenPageInfo';
import { OpenWebinarHistoryInfo } from './OpenWebinarHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryWebinarsResponse extends SdkResponse {
    public offset: number;
    public limit: number;
    public count: number;
    public data?: Array<OpenWebinarHistoryInfo>;
    public constructor(offset?: any, limit?: any, count?: any) { 
        super();
        this['offset'] = offset;
        this['limit'] = limit;
        this['count'] = count;
    }
    public withOffset(offset: number): ListHistoryWebinarsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHistoryWebinarsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListHistoryWebinarsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<OpenWebinarHistoryInfo>): ListHistoryWebinarsResponse {
        this['data'] = data;
        return this;
    }
}