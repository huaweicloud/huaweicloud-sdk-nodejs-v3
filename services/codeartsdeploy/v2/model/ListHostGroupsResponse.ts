import { DeploymentGroupDetail } from './DeploymentGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostGroupsResponse extends SdkResponse {
    public total?: number;
    private 'host_groups'?: Array<DeploymentGroupDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHostGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withHostGroups(hostGroups: Array<DeploymentGroupDetail>): ListHostGroupsResponse {
        this['host_groups'] = hostGroups;
        return this;
    }
    public set hostGroups(hostGroups: Array<DeploymentGroupDetail>  | undefined) {
        this['host_groups'] = hostGroups;
    }
    public get hostGroups(): Array<DeploymentGroupDetail> | undefined {
        return this['host_groups'];
    }
}