import { IdListWrapper } from './IdListWrapper';
import { PublicIpInfo } from './PublicIpInfo';


export class LoadBalancer {
    public id?: string;
    public name?: string;
    public guaranteed?: string;
    private 'billing_info'?: string;
    public description?: string;
    private 'vpc_id'?: string;
    private 'provisioning_status'?: string;
    public listeners?: Array<IdListWrapper>;
    private 'vip_address'?: string;
    private 'vip_port_id'?: string;
    private 'ipv6_vip_address'?: string;
    public publicips?: Array<PublicIpInfo>;
    public constructor() { 
    }
    public withId(id: string): LoadBalancer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LoadBalancer {
        this['name'] = name;
        return this;
    }
    public withGuaranteed(guaranteed: string): LoadBalancer {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withBillingInfo(billingInfo: string): LoadBalancer {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withDescription(description: string): LoadBalancer {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): LoadBalancer {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancer {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withListeners(listeners: Array<IdListWrapper>): LoadBalancer {
        this['listeners'] = listeners;
        return this;
    }
    public withVipAddress(vipAddress: string): LoadBalancer {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withVipPortId(vipPortId: string): LoadBalancer {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string  | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId(): string | undefined {
        return this['vip_port_id'];
    }
    public withIpv6VipAddress(ipv6VipAddress: string): LoadBalancer {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withPublicips(publicips: Array<PublicIpInfo>): LoadBalancer {
        this['publicips'] = publicips;
        return this;
    }
}