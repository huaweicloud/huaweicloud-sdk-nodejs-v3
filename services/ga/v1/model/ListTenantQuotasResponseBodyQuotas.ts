import { QuotaOuterResource } from './QuotaOuterResource';


export class ListTenantQuotasResponseBodyQuotas {
    public resources?: Array<QuotaOuterResource>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaOuterResource>): ListTenantQuotasResponseBodyQuotas {
        this['resources'] = resources;
        return this;
    }
}