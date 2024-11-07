import { GatewayTypeEnum } from './GatewayTypeEnum';


export class GatewayType {
    private 'gateway_type'?: GatewayTypeEnum;
    public constructor(gatewayType?: GatewayTypeEnum) { 
        this['gateway_type'] = gatewayType;
    }
    public withGatewayType(gatewayType: GatewayTypeEnum): GatewayType {
        this['gateway_type'] = gatewayType;
        return this;
    }
    public set gatewayType(gatewayType: GatewayTypeEnum  | undefined) {
        this['gateway_type'] = gatewayType;
    }
    public get gatewayType(): GatewayTypeEnum | undefined {
        return this['gateway_type'];
    }
}