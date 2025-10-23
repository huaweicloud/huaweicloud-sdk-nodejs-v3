import { ProtectedRefsUserGroupBasicDto } from './ProtectedRefsUserGroupBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectProtectedRefsUserGroupsResponse extends SdkResponse {
    public body?: Array<ProtectedRefsUserGroupBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProtectedRefsUserGroupBasicDto>): ListProjectProtectedRefsUserGroupsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectProtectedRefsUserGroupsResponse {
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