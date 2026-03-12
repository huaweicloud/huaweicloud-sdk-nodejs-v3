import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class CountCertResourceInstancesRequest {
    public body?: ListResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourceInstancesRequestBody): CountCertResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}