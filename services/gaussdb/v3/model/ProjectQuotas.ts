import { Resource } from './Resource';


export class ProjectQuotas {
    public resources?: Array<Resource>;
    public constructor(resources?: Array<Resource>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Resource>): ProjectQuotas {
        this['resources'] = resources;
        return this;
    }
}