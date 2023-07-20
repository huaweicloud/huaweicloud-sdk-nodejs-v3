import { OpenPageInfo } from './OpenPageInfo';
import { OpenWebinarOngoingInfo } from './OpenWebinarOngoingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOngoingWebinarsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<OpenWebinarOngoingInfo>;
    public constructor(offset?: number, limit?: number, count?: number) { 
        super();
        this['offset'] = offset;
        this['limit'] = limit;
        this['count'] = count;
    }
    public withOffset(offset: number): ListOngoingWebinarsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOngoingWebinarsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListOngoingWebinarsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<OpenWebinarOngoingInfo>): ListOngoingWebinarsResponse {
        this['data'] = data;
        return this;
    }
}