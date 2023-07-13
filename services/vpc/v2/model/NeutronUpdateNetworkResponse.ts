import { NeutronNetwork } from './NeutronNetwork';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateNetworkResponse extends SdkResponse {
    public network?: NeutronNetwork;
    public constructor() { 
        super();
    }
    public withNetwork(network: NeutronNetwork): NeutronUpdateNetworkResponse {
        this['network'] = network;
        return this;
    }
}