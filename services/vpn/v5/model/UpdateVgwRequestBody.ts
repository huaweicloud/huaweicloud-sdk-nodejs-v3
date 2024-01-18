import { UpdateVgwRequestBodyContent } from './UpdateVgwRequestBodyContent';


export class UpdateVgwRequestBody {
    private 'vpn_gateway'?: UpdateVgwRequestBodyContent;
    public constructor(vpnGateway?: UpdateVgwRequestBodyContent) { 
        this['vpn_gateway'] = vpnGateway;
    }
    public withVpnGateway(vpnGateway: UpdateVgwRequestBodyContent): UpdateVgwRequestBody {
        this['vpn_gateway'] = vpnGateway;
        return this;
    }
    public set vpnGateway(vpnGateway: UpdateVgwRequestBodyContent  | undefined) {
        this['vpn_gateway'] = vpnGateway;
    }
    public get vpnGateway(): UpdateVgwRequestBodyContent | undefined {
        return this['vpn_gateway'];
    }
}