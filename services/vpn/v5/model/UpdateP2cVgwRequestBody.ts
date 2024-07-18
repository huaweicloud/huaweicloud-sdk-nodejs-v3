import { UpdateP2cVgwRequestBodyContent } from './UpdateP2cVgwRequestBodyContent';


export class UpdateP2cVgwRequestBody {
    private 'p2c_vpn_gateway'?: UpdateP2cVgwRequestBodyContent;
    public constructor(p2cVpnGateway?: UpdateP2cVgwRequestBodyContent) { 
        this['p2c_vpn_gateway'] = p2cVpnGateway;
    }
    public withP2cVpnGateway(p2cVpnGateway: UpdateP2cVgwRequestBodyContent): UpdateP2cVgwRequestBody {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
        return this;
    }
    public set p2cVpnGateway(p2cVpnGateway: UpdateP2cVgwRequestBodyContent  | undefined) {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
    }
    public get p2cVpnGateway(): UpdateP2cVgwRequestBodyContent | undefined {
        return this['p2c_vpn_gateway'];
    }
}