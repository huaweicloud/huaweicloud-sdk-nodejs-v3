import { Quotas } from './Quotas';


export class QuotaResourcesDto {
    public resources?: Array<Quotas>;
    public constructor(resources?: Array<Quotas>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Quotas>): QuotaResourcesDto {
        this['resources'] = resources;
        return this;
    }
}