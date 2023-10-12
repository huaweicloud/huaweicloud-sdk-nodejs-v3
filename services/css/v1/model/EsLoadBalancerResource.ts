import { EsListenersResource } from './EsListenersResource';
import { EsPublicipsResource } from './EsPublicipsResource';


export class EsLoadBalancerResource {
    public id?: string;
    public name?: string;
    public guaranteed?: string;
    private 'billing_info'?: string;
    public description?: string;
    private 'vpc_id'?: string;
    private 'provisioning_status'?: string;
    public listeners?: EsListenersResource;
    private 'vip_address'?: string;
    public publicips?: EsPublicipsResource;
    public constructor() { 
    }
    public withId(id: string): EsLoadBalancerResource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EsLoadBalancerResource {
        this['name'] = name;
        return this;
    }
    public withGuaranteed(guaranteed: string): EsLoadBalancerResource {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withBillingInfo(billingInfo: string): EsLoadBalancerResource {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withDescription(description: string): EsLoadBalancerResource {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): EsLoadBalancerResource {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withProvisioningStatus(provisioningStatus: string): EsLoadBalancerResource {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withListeners(listeners: EsListenersResource): EsLoadBalancerResource {
        this['listeners'] = listeners;
        return this;
    }
    public withVipAddress(vipAddress: string): EsLoadBalancerResource {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withPublicips(publicips: EsPublicipsResource): EsLoadBalancerResource {
        this['publicips'] = publicips;
        return this;
    }
}