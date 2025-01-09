import { NatGateway } from './NatGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatGatewaysResponse extends SdkResponse {
    private 'nat_gateways'?: Array<NatGateway>;
    public constructor() { 
        super();
    }
    public withNatGateways(natGateways: Array<NatGateway>): ListNatGatewaysResponse {
        this['nat_gateways'] = natGateways;
        return this;
    }
    public set natGateways(natGateways: Array<NatGateway>  | undefined) {
        this['nat_gateways'] = natGateways;
    }
    public get natGateways(): Array<NatGateway> | undefined {
        return this['nat_gateways'];
    }
}