import { PreheatingResult } from './PreheatingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPreheatingAssetResponse extends SdkResponse {
    private 'preheating_results'?: Array<PreheatingResult> | undefined;
    public constructor() { 
        super();
    }
    public withPreheatingResults(preheatingResults: Array<PreheatingResult>): ShowPreheatingAssetResponse {
        this['preheating_results'] = preheatingResults;
        return this;
    }
    public set preheatingResults(preheatingResults: Array<PreheatingResult> | undefined) {
        this['preheating_results'] = preheatingResults;
    }
    public get preheatingResults() {
        return this['preheating_results'];
    }
}