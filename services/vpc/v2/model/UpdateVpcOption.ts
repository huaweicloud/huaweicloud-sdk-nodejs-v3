import { Route } from './Route';


export class UpdateVpcOption {
    public name?: string;
    public description?: string;
    public cidr?: string;
    public routes?: Array<Route>;
    private 'enable_network_address_usage_metrics'?: boolean;
    public constructor() { 
    }
    public withName(name: string): UpdateVpcOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVpcOption {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): UpdateVpcOption {
        this['cidr'] = cidr;
        return this;
    }
    public withRoutes(routes: Array<Route>): UpdateVpcOption {
        this['routes'] = routes;
        return this;
    }
    public withEnableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean): UpdateVpcOption {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
        return this;
    }
    public set enableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean  | undefined) {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
    }
    public get enableNetworkAddressUsageMetrics(): boolean | undefined {
        return this['enable_network_address_usage_metrics'];
    }
}