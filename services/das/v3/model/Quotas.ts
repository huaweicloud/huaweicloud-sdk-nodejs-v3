import { Resource } from './Resource';


export class Quotas {
    public resources?: Array<Resource>;
    public constructor() { 
    }
    public withResources(resources: Array<Resource>): Quotas {
        this['resources'] = resources;
        return this;
    }
}