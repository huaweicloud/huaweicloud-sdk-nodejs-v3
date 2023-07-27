import { ApiGroupInfo } from './ApiGroupInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiGroupsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public groups?: Array<ApiGroupInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApiGroupsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApiGroupsV2Response {
        this['total'] = total;
        return this;
    }
    public withGroups(groups: Array<ApiGroupInfo>): ListApiGroupsV2Response {
        this['groups'] = groups;
        return this;
    }
}