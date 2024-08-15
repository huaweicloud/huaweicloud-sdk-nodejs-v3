import { UpdateVgwSpecificationRequestBodyContent } from './UpdateVgwSpecificationRequestBodyContent';


export class UpdateVgwSpecificationRequestBody {
    private 'vpn_gateway'?: UpdateVgwSpecificationRequestBodyContent;
    public constructor(vpnGateway?: UpdateVgwSpecificationRequestBodyContent) { 
        this['vpn_gateway'] = vpnGateway;
    }
    public withVpnGateway(vpnGateway: UpdateVgwSpecificationRequestBodyContent): UpdateVgwSpecificationRequestBody {
        this['vpn_gateway'] = vpnGateway;
        return this;
    }
    public set vpnGateway(vpnGateway: UpdateVgwSpecificationRequestBodyContent  | undefined) {
        this['vpn_gateway'] = vpnGateway;
    }
    public get vpnGateway(): UpdateVgwSpecificationRequestBodyContent | undefined {
        return this['vpn_gateway'];
    }
}