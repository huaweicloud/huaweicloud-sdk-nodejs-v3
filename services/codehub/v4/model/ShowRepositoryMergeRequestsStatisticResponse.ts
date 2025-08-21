import { MergeRequestStatisticDto } from './MergeRequestStatisticDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryMergeRequestsStatisticResponse extends SdkResponse {
    public body?: Array<MergeRequestStatisticDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestStatisticDto>): ShowRepositoryMergeRequestsStatisticResponse {
        this['body'] = body;
        return this;
    }
}