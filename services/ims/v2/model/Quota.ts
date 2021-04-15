import { QuotaInfo } from './QuotaInfo';


export class Quota {
    public resources: Array<QuotaInfo>;
    public constructor(resources?: any) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<QuotaInfo>): Quota {
        this['resources'] = resources;
        return this;
    }
}