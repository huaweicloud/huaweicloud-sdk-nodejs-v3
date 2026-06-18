import { GroupProtectedBranchApiDto } from './GroupProtectedBranchApiDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupProtectedBranchesResponse extends SdkResponse {
    public body?: Array<GroupProtectedBranchApiDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupProtectedBranchApiDto>): ListGroupProtectedBranchesResponse {
        this['body'] = body;
        return this;
    }
}