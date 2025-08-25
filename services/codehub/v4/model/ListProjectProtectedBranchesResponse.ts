import { ProjectProtectedBranchApiDto } from './ProjectProtectedBranchApiDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectProtectedBranchesResponse extends SdkResponse {
    public body?: Array<ProjectProtectedBranchApiDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectProtectedBranchApiDto>): ListProjectProtectedBranchesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectProtectedBranchesResponse {
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