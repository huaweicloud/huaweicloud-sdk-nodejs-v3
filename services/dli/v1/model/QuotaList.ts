import { QuotaInfo } from './QuotaInfo';


export class QuotaList {
    public resources?: Array<QuotaInfo>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaInfo>): QuotaList {
        this['resources'] = resources;
        return this;
    }
}