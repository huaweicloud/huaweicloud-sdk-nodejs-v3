import { ActiveCodeInfo } from './ActiveCodeInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActiveCodeResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ActiveCodeInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListActiveCodeResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListActiveCodeResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListActiveCodeResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ActiveCodeInfo>): ListActiveCodeResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListActiveCodeResponse {
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