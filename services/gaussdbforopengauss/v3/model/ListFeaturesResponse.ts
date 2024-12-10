import { FeatureResult } from './FeatureResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeaturesResponse extends SdkResponse {
    public features?: Array<FeatureResult>;
    public constructor() { 
        super();
    }
    public withFeatures(features: Array<FeatureResult>): ListFeaturesResponse {
        this['features'] = features;
        return this;
    }
}