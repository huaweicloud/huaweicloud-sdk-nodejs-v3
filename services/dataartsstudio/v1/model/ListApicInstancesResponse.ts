import { ApigInstanceDTO } from './ApigInstanceDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApicInstancesResponse extends SdkResponse {
    private 'gateway_instances'?: Array<ApigInstanceDTO>;
    public constructor() { 
        super();
    }
    public withGatewayInstances(gatewayInstances: Array<ApigInstanceDTO>): ListApicInstancesResponse {
        this['gateway_instances'] = gatewayInstances;
        return this;
    }
    public set gatewayInstances(gatewayInstances: Array<ApigInstanceDTO>  | undefined) {
        this['gateway_instances'] = gatewayInstances;
    }
    public get gatewayInstances(): Array<ApigInstanceDTO> | undefined {
        return this['gateway_instances'];
    }
}