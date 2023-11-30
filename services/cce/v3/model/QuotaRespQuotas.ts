import { QuotaRespQuotasResources } from './QuotaRespQuotasResources';


export class QuotaRespQuotas {
    public resources?: Array<QuotaRespQuotasResources>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaRespQuotasResources>): QuotaRespQuotas {
        this['resources'] = resources;
        return this;
    }
}