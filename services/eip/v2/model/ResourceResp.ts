import { QuotaShowResp } from './QuotaShowResp';


export class ResourceResp {
    public resources: Array<QuotaShowResp>;
    public constructor(resources?: any) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<QuotaShowResp>): ResourceResp {
        this['resources'] = resources;
        return this;
    }
}