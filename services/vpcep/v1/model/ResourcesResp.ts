import { Quotas } from './Quotas';


export class ResourcesResp {
    public resources?: Array<Quotas>;
    public constructor() { 
    }
    public withResources(resources: Array<Quotas>): ResourcesResp {
        this['resources'] = resources;
        return this;
    }
}