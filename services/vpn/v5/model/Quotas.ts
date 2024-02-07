import { QuotaInfo } from './QuotaInfo';


export class Quotas {
    public resources?: Array<QuotaInfo>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaInfo>): Quotas {
        this['resources'] = resources;
        return this;
    }
}