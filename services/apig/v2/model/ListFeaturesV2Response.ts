import { BasePage } from './BasePage';
import { FeatureInfo } from './FeatureInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeaturesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public features?: Array<FeatureInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListFeaturesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListFeaturesV2Response {
        this['total'] = total;
        return this;
    }
    public withFeatures(features: Array<FeatureInfo>): ListFeaturesV2Response {
        this['features'] = features;
        return this;
    }
}