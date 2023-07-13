import { ExternalGatewayInfoOption } from './ExternalGatewayInfoOption';
import { Route } from './Route';


export class NeutronUpdateRouterOption {
    public name?: string;
    private 'admin_state_up'?: boolean | undefined;
    private 'external_gateway_info'?: ExternalGatewayInfoOption | undefined;
    public routes?: Array<Route>;
    public constructor() { 
    }
    public withName(name: string): NeutronUpdateRouterOption {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronUpdateRouterOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withExternalGatewayInfo(externalGatewayInfo: ExternalGatewayInfoOption): NeutronUpdateRouterOption {
        this['external_gateway_info'] = externalGatewayInfo;
        return this;
    }
    public set externalGatewayInfo(externalGatewayInfo: ExternalGatewayInfoOption | undefined) {
        this['external_gateway_info'] = externalGatewayInfo;
    }
    public get externalGatewayInfo() {
        return this['external_gateway_info'];
    }
    public withRoutes(routes: Array<Route>): NeutronUpdateRouterOption {
        this['routes'] = routes;
        return this;
    }
}