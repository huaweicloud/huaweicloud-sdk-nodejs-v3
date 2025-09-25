import { CreateP2cVgwRequestBodyContent } from './CreateP2cVgwRequestBodyContent';


export class CreateP2cVgwRequestBody {
    private 'p2c_vpn_gateway'?: CreateP2cVgwRequestBodyContent;
    public constructor(p2cVpnGateway?: CreateP2cVgwRequestBodyContent) { 
        this['p2c_vpn_gateway'] = p2cVpnGateway;
    }
    public withP2cVpnGateway(p2cVpnGateway: CreateP2cVgwRequestBodyContent): CreateP2cVgwRequestBody {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
        return this;
    }
    public set p2cVpnGateway(p2cVpnGateway: CreateP2cVgwRequestBodyContent  | undefined) {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
    }
    public get p2cVpnGateway(): CreateP2cVgwRequestBodyContent | undefined {
        return this['p2c_vpn_gateway'];
    }
}