import { QuotaItemInfo } from './QuotaItemInfo';


export class QuotaResourceResp {
    public resources?: Array<QuotaItemInfo>;
    public constructor() { 
    }
    public withResources(resources: Array<QuotaItemInfo>): QuotaResourceResp {
        this['resources'] = resources;
        return this;
    }
}