import { RefreshResult } from './RefreshResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRefreshResultResponse extends SdkResponse {
    private 'refresh_results'?: Array<RefreshResult>;
    public constructor() { 
        super();
    }
    public withRefreshResults(refreshResults: Array<RefreshResult>): ShowRefreshResultResponse {
        this['refresh_results'] = refreshResults;
        return this;
    }
    public set refreshResults(refreshResults: Array<RefreshResult>  | undefined) {
        this['refresh_results'] = refreshResults;
    }
    public get refreshResults(): Array<RefreshResult> | undefined {
        return this['refresh_results'];
    }
}