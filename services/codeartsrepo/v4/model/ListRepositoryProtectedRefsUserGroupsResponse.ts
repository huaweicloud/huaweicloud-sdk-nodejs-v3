import { ProtectedRefsUserGroupBasicDto } from './ProtectedRefsUserGroupBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryProtectedRefsUserGroupsResponse extends SdkResponse {
    public body?: Array<ProtectedRefsUserGroupBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProtectedRefsUserGroupBasicDto>): ListRepositoryProtectedRefsUserGroupsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListRepositoryProtectedRefsUserGroupsResponse {
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