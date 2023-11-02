import { ApigGroupDTO } from './ApigGroupDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApicGroupsResponse extends SdkResponse {
    private 'gateway_groups'?: Array<ApigGroupDTO>;
    public constructor() { 
        super();
    }
    public withGatewayGroups(gatewayGroups: Array<ApigGroupDTO>): ListApicGroupsResponse {
        this['gateway_groups'] = gatewayGroups;
        return this;
    }
    public set gatewayGroups(gatewayGroups: Array<ApigGroupDTO>  | undefined) {
        this['gateway_groups'] = gatewayGroups;
    }
    public get gatewayGroups(): Array<ApigGroupDTO> | undefined {
        return this['gateway_groups'];
    }
}