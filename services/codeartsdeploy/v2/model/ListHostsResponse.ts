import { DeploymentHostDetail } from './DeploymentHostDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostsResponse extends SdkResponse {
    public total?: number;
    private 'group_name'?: string;
    public hosts?: Array<DeploymentHostDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHostsResponse {
        this['total'] = total;
        return this;
    }
    public withGroupName(groupName: string): ListHostsResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHosts(hosts: Array<DeploymentHostDetail>): ListHostsResponse {
        this['hosts'] = hosts;
        return this;
    }
}