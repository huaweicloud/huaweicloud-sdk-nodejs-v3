import { QuotaResourceEntity } from './QuotaResourceEntity';


export class QuotasRespQuotas {
    public resources?: Array<QuotaResourceEntity>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaResourceEntity>): QuotasRespQuotas {
        this['resources'] = resources;
        return this;
    }
}