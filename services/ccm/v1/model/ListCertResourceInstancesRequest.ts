import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ListCertResourceInstancesRequest {
    public body?: ListResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourceInstancesRequestBody): ListCertResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}