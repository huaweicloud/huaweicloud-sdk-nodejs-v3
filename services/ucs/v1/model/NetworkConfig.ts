

export class NetworkConfig {
    public podCIDR?: string;
    public serviceCIDR?: string;
    public constructor() { 
    }
    public withPodCIDR(podCIDR: string): NetworkConfig {
        this['podCIDR'] = podCIDR;
        return this;
    }
    public withServiceCIDR(serviceCIDR: string): NetworkConfig {
        this['serviceCIDR'] = serviceCIDR;
        return this;
    }
}