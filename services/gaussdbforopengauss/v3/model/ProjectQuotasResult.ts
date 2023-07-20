import { ResourceResult } from './ResourceResult';


export class ProjectQuotasResult {
    public resources?: Array<ResourceResult>;
    public constructor(resources?: Array<ResourceResult>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceResult>): ProjectQuotasResult {
        this['resources'] = resources;
        return this;
    }
}