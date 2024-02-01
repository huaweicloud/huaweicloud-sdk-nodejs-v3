import { ListGlobalConnectionBandwidthConfigs } from './ListGlobalConnectionBandwidthConfigs';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalConnectionBandwidthConfigsResponse extends SdkResponse {
    private 'request_id'?: string;
    public configs?: ListGlobalConnectionBandwidthConfigs;
    public constructor(requestId?: string) { 
        super();
        this['request_id'] = requestId;
    }
    public withRequestId(requestId: string): ListGlobalConnectionBandwidthConfigsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withConfigs(configs: ListGlobalConnectionBandwidthConfigs): ListGlobalConnectionBandwidthConfigsResponse {
        this['configs'] = configs;
        return this;
    }
}