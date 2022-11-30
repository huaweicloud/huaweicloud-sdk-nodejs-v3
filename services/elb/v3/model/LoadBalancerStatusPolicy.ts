import { LoadBalancerStatusL7Rule } from './LoadBalancerStatusL7Rule';


export class LoadBalancerStatusPolicy {
    public action?: string;
    public id?: string;
    private 'provisioning_status'?: string | undefined;
    public name?: string;
    public rules?: Array<LoadBalancerStatusL7Rule>;
    public constructor() { 
    }
    public withAction(action: string): LoadBalancerStatusPolicy {
        this['action'] = action;
        return this;
    }
    public withId(id: string): LoadBalancerStatusPolicy {
        this['id'] = id;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatusPolicy {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withName(name: string): LoadBalancerStatusPolicy {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<LoadBalancerStatusL7Rule>): LoadBalancerStatusPolicy {
        this['rules'] = rules;
        return this;
    }
}