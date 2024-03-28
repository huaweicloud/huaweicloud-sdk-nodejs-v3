import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceFeaturesResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public features?: Array<string>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListInstanceFeaturesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInstanceFeaturesResponse {
        this['total'] = total;
        return this;
    }
    public withFeatures(features: Array<string>): ListInstanceFeaturesResponse {
        this['features'] = features;
        return this;
    }
}