import { QuotaResource } from './QuotaResource';


export class CommonQuotas {
    public resources?: Array<QuotaResource>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaResource>): CommonQuotas {
        this['resources'] = resources;
        return this;
    }
}