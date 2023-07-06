import { QuotaResource } from './QuotaResource';


export class QueryQuotaInfo {
    public resource?: QuotaResource;
    public constructor() { 
    }
    public withResource(resource: QuotaResource): QueryQuotaInfo {
        this['resource'] = resource;
        return this;
    }
}