import { ResourceResult } from './ResourceResult';


export class Quota {
    public resources?: Array<ResourceResult>;
    public constructor(resources?: Array<ResourceResult>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceResult>): Quota {
        this['resources'] = resources;
        return this;
    }
}