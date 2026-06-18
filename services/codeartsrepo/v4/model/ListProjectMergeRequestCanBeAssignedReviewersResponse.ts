import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestCanBeAssignedReviewersResponse extends SdkResponse {
    public body?: Array<UserBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserBasicDto>): ListProjectMergeRequestCanBeAssignedReviewersResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectMergeRequestCanBeAssignedReviewersResponse {
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