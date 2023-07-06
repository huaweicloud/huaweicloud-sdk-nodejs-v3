import { QueryUserResp } from './QueryUserResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateUserResponse extends SdkResponse {
    private 'all_counts'?: number | undefined;
    public results?: Array<QueryUserResp>;
    public constructor() { 
        super();
    }
    public withAllCounts(allCounts: number): BatchUpdateUserResponse {
        this['all_counts'] = allCounts;
        return this;
    }
    public set allCounts(allCounts: number | undefined) {
        this['all_counts'] = allCounts;
    }
    public get allCounts() {
        return this['all_counts'];
    }
    public withResults(results: Array<QueryUserResp>): BatchUpdateUserResponse {
        this['results'] = results;
        return this;
    }
}