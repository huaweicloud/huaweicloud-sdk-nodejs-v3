import { GroupsManageableDto } from './GroupsManageableDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManageableGroupsResponse extends SdkResponse {
    public body?: Array<GroupsManageableDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupsManageableDto>): ListManageableGroupsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListManageableGroupsResponse {
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