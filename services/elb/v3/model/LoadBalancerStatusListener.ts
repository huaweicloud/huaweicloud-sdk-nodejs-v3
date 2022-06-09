import { LoadBalancerStatusPolicy } from './LoadBalancerStatusPolicy';
import { LoadBalancerStatusPool } from './LoadBalancerStatusPool';


export class LoadBalancerStatusListener {
    public name?: string;
    private 'provisioning_status'?: string | undefined;
    public pools?: Array<LoadBalancerStatusPool>;
    public l7policies?: Array<LoadBalancerStatusPolicy>;
    public id?: string;
    private 'operating_status'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): LoadBalancerStatusListener {
        this['name'] = name;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatusListener {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withPools(pools: Array<LoadBalancerStatusPool>): LoadBalancerStatusListener {
        this['pools'] = pools;
        return this;
    }
    public withL7policies(l7policies: Array<LoadBalancerStatusPolicy>): LoadBalancerStatusListener {
        this['l7policies'] = l7policies;
        return this;
    }
    public withId(id: string): LoadBalancerStatusListener {
        this['id'] = id;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): LoadBalancerStatusListener {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
}