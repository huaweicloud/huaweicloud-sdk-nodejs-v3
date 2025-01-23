import { FeatureConfig } from './FeatureConfig';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeatureConfigsResponse extends SdkResponse {
    public configs?: Array<FeatureConfig>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withConfigs(configs: Array<FeatureConfig>): ListFeatureConfigsResponse {
        this['configs'] = configs;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListFeatureConfigsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListFeatureConfigsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}