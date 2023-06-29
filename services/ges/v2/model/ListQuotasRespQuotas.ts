import { ListQuotasRespQuotasResources } from './ListQuotasRespQuotasResources';


export class ListQuotasRespQuotas {
    public resources?: Array<ListQuotasRespQuotasResources>;
    public constructor() { 
    }
    public withResources(resources: Array<ListQuotasRespQuotasResources>): ListQuotasRespQuotas {
        this['resources'] = resources;
        return this;
    }
}