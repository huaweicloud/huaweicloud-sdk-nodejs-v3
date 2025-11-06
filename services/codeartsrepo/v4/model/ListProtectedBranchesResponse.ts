import { RepositoryProtectedBranchDto } from './RepositoryProtectedBranchDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectedBranchesResponse extends SdkResponse {
    public body?: Array<RepositoryProtectedBranchDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryProtectedBranchDto>): ListProtectedBranchesResponse {
        this['body'] = body;
        return this;
    }
}