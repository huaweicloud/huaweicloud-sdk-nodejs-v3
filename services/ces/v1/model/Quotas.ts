import { Resource } from './Resource';


export class Quotas {
    public resources?: Array<Resource>;
    public constructor(resources?: Array<Resource>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Resource>): Quotas {
        this['resources'] = resources;
        return this;
    }
}