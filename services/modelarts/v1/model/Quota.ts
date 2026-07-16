import { ResourceQuota } from './ResourceQuota';


export class Quota {
    public resources?: Array<ResourceQuota>;
    public constructor() { 
    }
    public withResources(resources: Array<ResourceQuota>): Quota {
        this['resources'] = resources;
        return this;
    }
}