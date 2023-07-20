import { EpQuotas } from './EpQuotas';


export class QuotasDetail {
    public resources?: Array<EpQuotas>;
    public constructor(resources?: Array<EpQuotas>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<EpQuotas>): QuotasDetail {
        this['resources'] = resources;
        return this;
    }
}