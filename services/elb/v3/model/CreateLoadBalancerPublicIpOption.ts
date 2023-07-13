import { CreateLoadBalancerBandwidthOption } from './CreateLoadBalancerBandwidthOption';


export class CreateLoadBalancerPublicIpOption {
    private 'ip_version'?: number | undefined;
    private 'network_type': string | undefined;
    private 'billing_info'?: string | undefined;
    public description?: string;
    public bandwidth: CreateLoadBalancerBandwidthOption;
    public constructor(networkType?: any, bandwidth?: any) { 
        this['network_type'] = networkType;
        this['bandwidth'] = bandwidth;
    }
    public withIpVersion(ipVersion: number): CreateLoadBalancerPublicIpOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withNetworkType(networkType: string): CreateLoadBalancerPublicIpOption {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType() {
        return this['network_type'];
    }
    public withBillingInfo(billingInfo: string): CreateLoadBalancerPublicIpOption {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
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