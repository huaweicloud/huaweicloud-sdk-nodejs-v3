import { Pages } from './Pages';
import { PluginConfigInfo } from './PluginConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginConfigResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<PluginConfigInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPluginConfigResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginConfigResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListPluginConfigResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<PluginConfigInfo>): ListPluginConfigResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPluginConfigResponse {
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