

export class LoadBalancerStatusHealthMonitor {
    public type?: string;
    public id?: string;
    public name?: string;
    private 'provisioning_status'?: string | undefined;
    public constructor() { 
    }
    public withType(type: string): LoadBalancerStatusHealthMonitor {
        this['type'] = type;
        return this;
    }
    public withId(id: string): LoadBalancerStatusHealthMonitor {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LoadBalancerStatusHealthMonitor {
        this['name'] = name;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatusHealthMonitor {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
}