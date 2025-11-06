import { MergeRequestApprovalReviewersDto } from './MergeRequestApprovalReviewersDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestReviewersResponse extends SdkResponse {
    public result?: MergeRequestApprovalReviewersDto;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: MergeRequestApprovalReviewersDto): ListMergeRequestReviewersResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListMergeRequestReviewersResponse {
        this['status'] = status;
        return this;
    }
}