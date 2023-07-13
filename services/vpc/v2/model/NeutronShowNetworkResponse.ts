import { NeutronNetwork } from './NeutronNetwork';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronShowNetworkResponse extends SdkResponse {
    public network?: NeutronNetwork;
    public constructor() { 
        super();
    }
    public withNetwork(network: NeutronNetwork): NeutronShowNetworkResponse {
        this['network'] = network;
        return this;
    }
}