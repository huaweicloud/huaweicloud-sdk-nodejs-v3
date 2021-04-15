import { ShowServerGroupResult } from './ShowServerGroupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerGroupResponse extends SdkResponse {
    private 'server_group'?: ShowServerGroupResult | undefined;
    public constructor() { 
        super();
    }
    public withServerGroup(serverGroup: ShowServerGroupResult): ShowServerGroupResponse {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: ShowServerGroupResult | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup() {
        return this['server_group'];
    }
}