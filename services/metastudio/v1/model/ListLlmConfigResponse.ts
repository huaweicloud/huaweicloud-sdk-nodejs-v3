import { LlmConfigInfo } from './LlmConfigInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLlmConfigResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<LlmConfigInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListLlmConfigResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLlmConfigResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListLlmConfigResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<LlmConfigInfo>): ListLlmConfigResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListLlmConfigResponse {
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