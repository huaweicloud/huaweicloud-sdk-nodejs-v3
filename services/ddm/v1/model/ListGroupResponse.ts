import { GroupInfo } from './GroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'group_list'?: Array<GroupInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListGroupResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withGroupList(groupList: Array<GroupInfo>): ListGroupResponse {
        this['group_list'] = groupList;
        return this;
    }
    public set groupList(groupList: Array<GroupInfo>  | undefined) {
        this['group_list'] = groupList;
    }
    public get groupList(): Array<GroupInfo> | undefined {
        return this['group_list'];
    }
}