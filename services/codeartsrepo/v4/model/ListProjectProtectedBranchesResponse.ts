import { ProjectProtectedBranchApiDto } from './ProjectProtectedBranchApiDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectProtectedBranchesResponse extends SdkResponse {
    public body?: Array<ProjectProtectedBranchApiDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectProtectedBranchApiDto>): ListProjectProtectedBranchesResponse {
        this['body'] = body;
        return this;
    }
}