import { ExternalGatewayInfoOption } from './ExternalGatewayInfoOption';


export class NeutronCreateRouterOption {
    public name?: string;
    private 'admin_state_up'?: boolean | undefined;
    private 'external_gateway_info'?: ExternalGatewayInfoOption | undefined;
    public constructor() { 
    }
    public withName(name: string): NeutronCreateRouterOption {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronCreateRouterOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withExternalGatewayInfo(externalGatewayInfo: ExternalGatewayInfoOption): NeutronCreateRouterOption {
        this['external_gateway_info'] = externalGatewayInfo;
        return this;
    }
    public set externalGatewayInfo(externalGatewayInfo: ExternalGatewayInfoOption | undefined) {
        this['external_gateway_info'] = externalGatewayInfo;
    }
    public get externalGatewayInfo() {
        return this['external_gateway_info'];
    }
}