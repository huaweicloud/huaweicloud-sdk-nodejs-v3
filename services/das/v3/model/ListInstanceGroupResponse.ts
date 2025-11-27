import { InstanceGroup } from './InstanceGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceGroupResponse extends SdkResponse {
    public total?: number;
    private 'instance_group_list'?: Array<InstanceGroup>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceGroupResponse {
        this['total'] = total;
        return this;
    }
    public withInstanceGroupList(instanceGroupList: Array<InstanceGroup>): ListInstanceGroupResponse {
        this['instance_group_list'] = instanceGroupList;
        return this;
    }
    public set instanceGroupList(instanceGroupList: Array<InstanceGroup>  | undefined) {
        this['instance_group_list'] = instanceGroupList;
    }
    public get instanceGroupList(): Array<InstanceGroup> | undefined {
        return this['instance_group_list'];
    }
}