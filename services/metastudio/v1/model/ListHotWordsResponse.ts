import { HotWordsInfo } from './HotWordsInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHotWordsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<HotWordsInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListHotWordsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHotWordsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListHotWordsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<HotWordsInfo>): ListHotWordsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListHotWordsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}