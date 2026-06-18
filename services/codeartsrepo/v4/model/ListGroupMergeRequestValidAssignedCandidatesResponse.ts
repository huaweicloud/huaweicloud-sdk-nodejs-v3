import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMergeRequestValidAssignedCandidatesResponse extends SdkResponse {
    public body?: Array<UserBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserBasicDto>): ListGroupMergeRequestValidAssignedCandidatesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListGroupMergeRequestValidAssignedCandidatesResponse {
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