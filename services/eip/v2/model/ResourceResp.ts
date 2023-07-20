import { QuotaShowResp } from './QuotaShowResp';


export class ResourceResp {
    public resources?: Array<QuotaShowResp>;
    public constructor(resources?: Array<QuotaShowResp>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<QuotaShowResp>): ResourceResp {
        this['resources'] = resources;
        return this;
    }
}