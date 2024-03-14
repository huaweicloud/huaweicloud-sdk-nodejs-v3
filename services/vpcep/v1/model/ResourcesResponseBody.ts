import { Quotas } from './Quotas';


export class ResourcesResponseBody {
    public resources?: Array<Quotas>;
    public constructor() { 
    }
    public withResources(resources: Array<Quotas>): ResourcesResponseBody {
        this['resources'] = resources;
        return this;
    }
}