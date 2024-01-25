import { Dubbo } from './Dubbo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyHttp2RpcResponse extends SdkResponse {
    public gatewayId?: string;
    public pluginConfig?: object;
    public name?: string;
    public routeName?: string;
    public routeDestinationName?: string;
    public dubbo?: Dubbo;
    public constructor() { 
        super();
    }
    public withGatewayId(gatewayId: string): ModifyHttp2RpcResponse {
        this['gatewayId'] = gatewayId;
        return this;
    }
    public withPluginConfig(pluginConfig: object): ModifyHttp2RpcResponse {
        this['pluginConfig'] = pluginConfig;
        return this;
    }
    public withName(name: string): ModifyHttp2RpcResponse {
        this['name'] = name;
        return this;
    }
    public withRouteName(routeName: string): ModifyHttp2RpcResponse {
        this['routeName'] = routeName;
        return this;
    }
    public withRouteDestinationName(routeDestinationName: string): ModifyHttp2RpcResponse {
        this['routeDestinationName'] = routeDestinationName;
        return this;
    }
    public withDubbo(dubbo: Dubbo): ModifyHttp2RpcResponse {
        this['dubbo'] = dubbo;
        return this;
    }
}