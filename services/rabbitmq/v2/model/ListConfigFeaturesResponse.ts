import { ListConfigFeatures } from './ListConfigFeatures';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigFeaturesResponse extends SdkResponse {
    public features?: Array<ListConfigFeatures>;
    public totalRecord?: number;
    public constructor() { 
        super();
    }
    public withFeatures(features: Array<ListConfigFeatures>): ListConfigFeaturesResponse {
        this['features'] = features;
        return this;
    }
    public withTotalRecord(totalRecord: number): ListConfigFeaturesResponse {
        this['totalRecord'] = totalRecord;
        return this;
    }
}