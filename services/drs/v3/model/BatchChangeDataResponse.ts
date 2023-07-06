import { DataTransformationResp } from './DataTransformationResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchChangeDataResponse extends SdkResponse {
    public results?: Array<DataTransformationResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<DataTransformationResp>): BatchChangeDataResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): BatchChangeDataResponse {
        this['count'] = count;
        return this;
    }
}