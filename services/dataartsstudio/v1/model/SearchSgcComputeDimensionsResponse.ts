import { ComputeDimension } from './ComputeDimension';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchSgcComputeDimensionsResponse extends SdkResponse {
    public count?: number;
    public computes?: Array<ComputeDimension>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchSgcComputeDimensionsResponse {
        this['count'] = count;
        return this;
    }
    public withComputes(computes: Array<ComputeDimension>): SearchSgcComputeDimensionsResponse {
        this['computes'] = computes;
        return this;
    }
}