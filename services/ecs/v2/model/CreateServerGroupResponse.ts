import { CreateServerGroupResult } from './CreateServerGroupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateServerGroupResponse extends SdkResponse {
    private 'server_group'?: CreateServerGroupResult | undefined;
    public constructor() { 
        super();
    }
    public withServerGroup(serverGroup: CreateServerGroupResult): CreateServerGroupResponse {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: CreateServerGroupResult | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup() {
        return this['server_group'];
    }
}