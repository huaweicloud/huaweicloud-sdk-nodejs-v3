import { PublishVersionVODetailData } from './PublishVersionVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDesignLatestApprovalDiffResponse extends SdkResponse {
    public data?: PublishVersionVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: PublishVersionVODetailData): SearchDesignLatestApprovalDiffResponse {
        this['data'] = data;
        return this;
    }
}