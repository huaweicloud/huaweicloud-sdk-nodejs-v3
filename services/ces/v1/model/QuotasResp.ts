import { ResourceQuotasResp } from './ResourceQuotasResp';


export class QuotasResp {
    public resources?: Array<ResourceQuotasResp>;
    public constructor(resources?: Array<ResourceQuotasResp>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourceQuotasResp>): QuotasResp {
        this['resources'] = resources;
        return this;
    }
}