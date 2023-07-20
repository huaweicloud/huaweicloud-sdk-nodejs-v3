import { CreateLoadBalancerBandwidthOption } from './CreateLoadBalancerBandwidthOption';


export class CreateLoadBalancerPublicIpOption {
    private 'ip_version'?: number;
    private 'network_type'?: string;
    private 'billing_info'?: string;
    public description?: string;
    public bandwidth?: CreateLoadBalancerBandwidthOption;
    public constructor(networkType?: string, bandwidth?: CreateLoadBalancerBandwidthOption) { 
        this['network_type'] = networkType;
        this['bandwidth'] = bandwidth;
    }
    public withIpVersion(ipVersion: number): CreateLoadBalancerPublicIpOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withNetworkType(networkType: string): CreateLoadBalancerPublicIpOption {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withBillingInfo(billingInfo: string): CreateLoadBalancerPublicIpOption {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withDescription(description: string): CreateLoadBalancerPublicIpOption {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: CreateLoadBalancerBandwidthOption): CreateLoadBalancerPublicIpOption {
        this['bandwidth'] = bandwidth;
        return this;
    }
}