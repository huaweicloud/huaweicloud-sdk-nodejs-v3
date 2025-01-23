import { LoadbalancerFeature } from './LoadbalancerFeature';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoadbalancerFeatureResponse extends SdkResponse {
    public features?: Array<LoadbalancerFeature>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withFeatures(features: Array<LoadbalancerFeature>): ListLoadbalancerFeatureResponse {
        this['features'] = features;
        return this;
    }
    public withRequestId(requestId: string): ListLoadbalancerFeatureResponse {
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