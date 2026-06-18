import { MergeRequestApprovalUserDto } from './MergeRequestApprovalUserDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestReviewersResponse extends SdkResponse {
    private 'required_reviewers_list'?: Array<MergeRequestApprovalUserDto>;
    private 'optional_reviewers_list'?: Array<MergeRequestApprovalUserDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withRequiredReviewersList(requiredReviewersList: Array<MergeRequestApprovalUserDto>): ListMergeRequestReviewersResponse {
        this['required_reviewers_list'] = requiredReviewersList;
        return this;
    }
    public set requiredReviewersList(requiredReviewersList: Array<MergeRequestApprovalUserDto>  | undefined) {
        this['required_reviewers_list'] = requiredReviewersList;
    }
    public get requiredReviewersList(): Array<MergeRequestApprovalUserDto> | undefined {
        return this['required_reviewers_list'];
    }
    public withOptionalReviewersList(optionalReviewersList: Array<MergeRequestApprovalUserDto>): ListMergeRequestReviewersResponse {
        this['optional_reviewers_list'] = optionalReviewersList;
        return this;
    }
    public set optionalReviewersList(optionalReviewersList: Array<MergeRequestApprovalUserDto>  | undefined) {
        this['optional_reviewers_list'] = optionalReviewersList;
    }
    public get optionalReviewersList(): Array<MergeRequestApprovalUserDto> | undefined {
        return this['optional_reviewers_list'];
    }
    public withXTotal(xTotal: string): ListMergeRequestReviewersResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}