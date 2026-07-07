import { ShowAnalysisSessionResultResp } from './ShowAnalysisSessionResultResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAnalysisSessionResultResponse extends SdkResponse {
    public body?: Array<ShowAnalysisSessionResultResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowAnalysisSessionResultResp>): ShowAnalysisSessionResultResponse {
        this['body'] = body;
        return this;
    }
}