import { ExternalGatewayInfoOption } from './ExternalGatewayInfoOption';


export class NeutronCreateRouterOption {
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'external_gateway_info'?: ExternalGatewayInfoOption;
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
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withExternalGatewayInfo(externalGatewayInfo: ExternalGatewayInfoOption): NeutronCreateRouterOption {
        this['external_gateway_info'] = externalGatewayInfo;
        return this;
    }
    public set externalGatewayInfo(externalGatewayInfo: ExternalGatewayInfoOption  | undefined) {
        this['external_gateway_info'] = externalGatewayInfo;
    }
    public get externalGatewayInfo(): ExternalGatewayInfoOption | undefined {
        return this['external_gateway_info'];
    }
}