import { AllResources } from './AllResources';


export class AllQuotas {
    public resources?: Array<AllResources>;
    public constructor() { 
    }
    public withResources(resources: Array<AllResources>): AllQuotas {
        this['resources'] = resources;
        return this;
    }
}