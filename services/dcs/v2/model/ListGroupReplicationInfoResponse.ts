import { InstanceGroupListInfo } from './InstanceGroupListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupReplicationInfoResponse extends SdkResponse {
    private 'group_list'?: Array<InstanceGroupListInfo>;
    private 'group_count'?: number;
    public constructor() { 
        super();
    }
    public withGroupList(groupList: Array<InstanceGroupListInfo>): ListGroupReplicationInfoResponse {
        this['group_list'] = groupList;
        return this;
    }
    public set groupList(groupList: Array<InstanceGroupListInfo>  | undefined) {
        this['group_list'] = groupList;
    }
    public get groupList(): Array<InstanceGroupListInfo> | undefined {
        return this['group_list'];
    }
    public withGroupCount(groupCount: number): ListGroupReplicationInfoResponse {
        this['group_count'] = groupCount;
        return this;
    }
    public set groupCount(groupCount: number  | undefined) {
        this['group_count'] = groupCount;
    }
    public get groupCount(): number | undefined {
        return this['group_count'];
    }
}