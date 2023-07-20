import { LoadBalancerStatusListener } from './LoadBalancerStatusListener';
import { LoadBalancerStatusPool } from './LoadBalancerStatusPool';


export class LoadBalancerStatus {
    public name?: string;
    private 'provisioning_status'?: string;
    public listeners?: Array<LoadBalancerStatusListener>;
    public pools?: Array<LoadBalancerStatusPool>;
    public id?: string;
    private 'operating_status'?: string;
    public constructor(name?: string, provisioningStatus?: string, listeners?: Array<LoadBalancerStatusListener>, pools?: Array<LoadBalancerStatusPool>, id?: string, operatingStatus?: string) { 
        this['name'] = name;
        this['provisioning_status'] = provisioningStatus;
        this['listeners'] = listeners;
        this['pools'] = pools;
        this['id'] = id;
        this['operating_status'] = operatingStatus;
    }
    public withName(name: string): LoadBalancerStatus {
        this['name'] = name;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatus {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withListeners(listeners: Array<LoadBalancerStatusListener>): LoadBalancerStatus {
        this['listeners'] = listeners;
        return this;
    }
    public withPools(pools: Array<LoadBalancerStatusPool>): LoadBalancerStatus {
        this['pools'] = pools;
        return this;
    }
    public withId(id: string): LoadBalancerStatus {
        this['id'] = id;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): LoadBalancerStatus {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
}