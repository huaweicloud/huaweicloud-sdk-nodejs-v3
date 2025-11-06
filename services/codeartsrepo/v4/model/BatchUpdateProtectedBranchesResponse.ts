import { RepositoryProtectedBranchDto } from './RepositoryProtectedBranchDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateProtectedBranchesResponse extends SdkResponse {
    public body?: Array<RepositoryProtectedBranchDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryProtectedBranchDto>): BatchUpdateProtectedBranchesResponse {
        this['body'] = body;
        return this;
    }
}