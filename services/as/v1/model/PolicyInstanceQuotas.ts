import { PolicyInstanceResources } from './PolicyInstanceResources';


export class PolicyInstanceQuotas {
    public resources?: Array<PolicyInstanceResources>;
    public constructor() { 
    }
    public withResources(resources: Array<PolicyInstanceResources>): PolicyInstanceQuotas {
        this['resources'] = resources;
        return this;
    }
}