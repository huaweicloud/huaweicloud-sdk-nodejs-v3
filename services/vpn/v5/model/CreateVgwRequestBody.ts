import { CreateVgwRequestBodyContent } from './CreateVgwRequestBodyContent';


export class CreateVgwRequestBody {
    private 'vpn_gateway'?: CreateVgwRequestBodyContent;
    public constructor(vpnGateway?: CreateVgwRequestBodyContent) { 
        this['vpn_gateway'] = vpnGateway;
    }
    public withVpnGateway(vpnGateway: CreateVgwRequestBodyContent): CreateVgwRequestBody {
        this['vpn_gateway'] = vpnGateway;
        return this;
    }
    public set vpnGateway(vpnGateway: CreateVgwRequestBodyContent  | undefined) {
        this['vpn_gateway'] = vpnGateway;
    }
    public get vpnGateway(): CreateVgwRequestBodyContent | undefined {
        return this['vpn_gateway'];
    }
}