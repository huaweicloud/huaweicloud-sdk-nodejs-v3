import { HotQuestionInfo } from './HotQuestionInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHotQuestionResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<HotQuestionInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListHotQuestionResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHotQuestionResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListHotQuestionResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<HotQuestionInfo>): ListHotQuestionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListHotQuestionResponse {
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