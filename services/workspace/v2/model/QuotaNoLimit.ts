import { ResourceNoLimit } from './ResourceNoLimit';


export class QuotaNoLimit {
    public resources?: Array<ResourceNoLimit>;
    public constructor(resources?: Array<ResourceNoLimit>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceNoLimit>): QuotaNoLimit {
        this['resources'] = resources;
        return this;
    }
}