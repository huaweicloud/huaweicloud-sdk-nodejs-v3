import { DomainsStatusesRequestBody } from './DomainsStatusesRequestBody';


export class ShowDomainsStatusesRequest {
    public body?: DomainsStatusesRequestBody;
    public constructor() { 
    }
    public withBody(body: DomainsStatusesRequestBody): ShowDomainsStatusesRequest {
        this['body'] = body;
        return this;
    }
}