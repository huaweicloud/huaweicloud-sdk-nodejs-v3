import { OpenPageInfo } from './OpenPageInfo';
import { OpenWebinarUpcomingInfo } from './OpenWebinarUpcomingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpComingWebinarsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<OpenWebinarUpcomingInfo>;
    public constructor(offset?: number, limit?: number, count?: number) { 
        super();
        this['offset'] = offset;
        this['limit'] = limit;
        this['count'] = count;
    }
    public withOffset(offset: number): ListUpComingWebinarsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUpComingWebinarsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListUpComingWebinarsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<OpenWebinarUpcomingInfo>): ListUpComingWebinarsResponse {
        this['data'] = data;
        return this;
    }
}