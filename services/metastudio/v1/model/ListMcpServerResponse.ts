import { McpServerInfo } from './McpServerInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMcpServerResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<McpServerInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListMcpServerResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMcpServerResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListMcpServerResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<McpServerInfo>): ListMcpServerResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListMcpServerResponse {
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