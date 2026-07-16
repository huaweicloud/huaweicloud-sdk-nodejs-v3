import { ServerRoceNetwork } from './ServerRoceNetwork';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRoceNetworkResponse extends SdkResponse {
    public network?: ServerRoceNetwork;
    public constructor() { 
        super();
    }
    public withNetwork(network: ServerRoceNetwork): CreateRoceNetworkResponse {
        this['network'] = network;
        return this;
    }
}