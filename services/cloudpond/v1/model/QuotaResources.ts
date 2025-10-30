import { QuotaDetail } from './QuotaDetail';


export class QuotaResources {
    public resources?: Array<QuotaDetail>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaDetail>): QuotaResources {
        this['resources'] = resources;
        return this;
    }
}