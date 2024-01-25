import { Dubbo } from './Dubbo';


export class Http2Rpc {
    public gatewayId?: string;
    public pluginConfig?: object;
    public name?: string;
    public routeName?: string;
    public routeDestinationName?: string;
    public dubbo?: Dubbo;
    public constructor() { 
    }
    public withGatewayId(gatewayId: string): Http2Rpc {
        this['gatewayId'] = gatewayId;
        return this;
    }
    public withPluginConfig(pluginConfig: object): Http2Rpc {
        this['pluginConfig'] = pluginConfig;
        return this;
    }
    public withName(name: string): Http2Rpc {
        this['name'] = name;
        return this;
    }
    public withRouteName(routeName: string): Http2Rpc {
        this['routeName'] = routeName;
        return this;
    }
    public withRouteDestinationName(routeDestinationName: string): Http2Rpc {
        this['routeDestinationName'] = routeDestinationName;
        return this;
    }
    public withDubbo(dubbo: Dubbo): Http2Rpc {
        this['dubbo'] = dubbo;
        return this;
    }
}