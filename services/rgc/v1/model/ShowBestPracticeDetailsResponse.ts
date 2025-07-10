import { BestPracticeCheckItemDetail } from './BestPracticeCheckItemDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBestPracticeDetailsResponse extends SdkResponse {
    public body?: Array<BestPracticeCheckItemDetail>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BestPracticeCheckItemDetail>): ShowBestPracticeDetailsResponse {
        this['body'] = body;
        return this;
    }
}