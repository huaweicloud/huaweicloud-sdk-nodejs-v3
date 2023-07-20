import { QuotaInfo } from './QuotaInfo';


export class Quota {
    public resources?: Array<QuotaInfo>;
    public constructor(resources?: Array<QuotaInfo>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<QuotaInfo>): Quota {
        this['resources'] = resources;
        return this;
    }
}