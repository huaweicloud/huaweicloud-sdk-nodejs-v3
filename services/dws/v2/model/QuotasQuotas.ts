import { QuotasResource } from './QuotasResource';


export class QuotasQuotas {
    public resources?: Array<QuotasResource>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotasResource>): QuotasQuotas {
        this['resources'] = resources;
        return this;
    }
}