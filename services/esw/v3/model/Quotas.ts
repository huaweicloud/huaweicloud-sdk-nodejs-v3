import { QuotaObject } from './QuotaObject';


export class Quotas {
    public resources?: Array<QuotaObject>;
    public constructor(resources?: Array<QuotaObject>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<QuotaObject>): Quotas {
        this['resources'] = resources;
        return this;
    }
}