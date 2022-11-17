import { Resources } from './Resources';


export class QueryTenantQuotaRespQuotas {
    public resources?: Array<Resources>;
    public constructor() { 
    }
    public withResources(resources: Array<Resources>): QueryTenantQuotaRespQuotas {
        this['resources'] = resources;
        return this;
    }
}