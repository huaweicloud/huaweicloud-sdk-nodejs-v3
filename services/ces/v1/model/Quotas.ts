import { ResourceQuotas } from './ResourceQuotas';


export class Quotas {
    public resources?: Array<ResourceQuotas>;
    public constructor(resources?: Array<ResourceQuotas>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceQuotas>): Quotas {
        this['resources'] = resources;
        return this;
    }
}