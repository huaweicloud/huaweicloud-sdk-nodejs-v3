import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestReviewersResponse extends SdkResponse {
    private 'required_reviewers_list'?: Array<UserBasicDto>;
    private 'optional_reviewers_list'?: Array<UserBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withRequiredReviewersList(requiredReviewersList: Array<UserBasicDto>): ListMergeRequestReviewersResponse {
        this['required_reviewers_list'] = requiredReviewersList;
        return this;
    }
    public set requiredReviewersList(requiredReviewersList: Array<UserBasicDto>  | undefined) {
        this['required_reviewers_list'] = requiredReviewersList;
    }
    public get requiredReviewersList(): Array<UserBasicDto> | undefined {
        return this['required_reviewers_list'];
    }
    public withOptionalReviewersList(optionalReviewersList: Array<UserBasicDto>): ListMergeRequestReviewersResponse {
        this['optional_reviewers_list'] = optionalReviewersList;
        return this;
    }
    public set optionalReviewersList(optionalReviewersList: Array<UserBasicDto>  | undefined) {
        this['optional_reviewers_list'] = optionalReviewersList;
    }
    public get optionalReviewersList(): Array<UserBasicDto> | undefined {
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