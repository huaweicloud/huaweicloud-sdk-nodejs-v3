import { QuotaResource } from './QuotaResource';


export class ShowQuotaResource {
    public resources?: Array<QuotaResource>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaResource>): ShowQuotaResource {
        this['resources'] = resources;
        return this;
    }
}