import { Quota } from './Quota';


export class Quotas {
    public resources?: Array<Quota>;
    public constructor() { 
    }
    public withResources(resources: Array<Quota>): Quotas {
        this['resources'] = resources;
        return this;
    }
}