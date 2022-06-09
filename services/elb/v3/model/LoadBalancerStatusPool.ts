import { LoadBalancerStatusHealthMonitor } from './LoadBalancerStatusHealthMonitor';
import { LoadBalancerStatusMember } from './LoadBalancerStatusMember';


export class LoadBalancerStatusPool {
    private 'provisioning_status'?: string | undefined;
    public name?: string;
    public healthmonitor?: LoadBalancerStatusHealthMonitor;
    public members?: Array<LoadBalancerStatusMember>;
    public id?: string;
    private 'operating_status'?: string | undefined;
    public constructor() { 
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatusPool {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withName(name: string): LoadBalancerStatusPool {
        this['name'] = name;
        return this;
    }
    public withHealthmonitor(healthmonitor: LoadBalancerStatusHealthMonitor): LoadBalancerStatusPool {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
    public withMembers(members: Array<LoadBalancerStatusMember>): LoadBalancerStatusPool {
        this['members'] = members;
        return this;
    }
    public withId(id: string): LoadBalancerStatusPool {
        this['id'] = id;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): LoadBalancerStatusPool {
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