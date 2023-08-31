import { NatGatewayResponseBody } from './NatGatewayResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatGatewaysResponse extends SdkResponse {
    private 'nat_gateways'?: Array<NatGatewayResponseBody>;
    public constructor() { 
        super();
    }
    public withNatGateways(natGateways: Array<NatGatewayResponseBody>): ListNatGatewaysResponse {
        this['nat_gateways'] = natGateways;
        return this;
    }
    public set natGateways(natGateways: Array<NatGatewayResponseBody>  | undefined) {
        this['nat_gateways'] = natGateways;
    }
    public get natGateways(): Array<NatGatewayResponseBody> | undefined {
        return this['nat_gateways'];
    }
}