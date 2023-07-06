import { DatabaseObjectResp } from './DatabaseObjectResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetObjectsResponse extends SdkResponse {
    private 'all_counts'?: number | undefined;
    public results?: Array<DatabaseObjectResp>;
    public constructor() { 
        super();
    }
    public withAllCounts(allCounts: number): BatchSetObjectsResponse {
        this['all_counts'] = allCounts;
        return this;
    }
    public set allCounts(allCounts: number | undefined) {
        this['all_counts'] = allCounts;
    }
    public get allCounts() {
        return this['all_counts'];
    }
    public withResults(results: Array<DatabaseObjectResp>): BatchSetObjectsResponse {
        this['results'] = results;
        return this;
    }
}