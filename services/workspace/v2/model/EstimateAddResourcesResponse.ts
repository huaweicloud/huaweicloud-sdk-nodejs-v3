import { CloudServiceRatingResult } from './CloudServiceRatingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EstimateAddResourcesResponse extends SdkResponse {
    public currency?: string;
    private 'cloud_service_rating_results'?: Array<CloudServiceRatingResult>;
    public constructor() { 
        super();
    }
    public withCurrency(currency: string): EstimateAddResourcesResponse {
        this['currency'] = currency;
        return this;
    }
    public withCloudServiceRatingResults(cloudServiceRatingResults: Array<CloudServiceRatingResult>): EstimateAddResourcesResponse {
        this['cloud_service_rating_results'] = cloudServiceRatingResults;
        return this;
    }
    public set cloudServiceRatingResults(cloudServiceRatingResults: Array<CloudServiceRatingResult>  | undefined) {
        this['cloud_service_rating_results'] = cloudServiceRatingResults;
    }
    public get cloudServiceRatingResults(): Array<CloudServiceRatingResult> | undefined {
        return this['cloud_service_rating_results'];
    }
}