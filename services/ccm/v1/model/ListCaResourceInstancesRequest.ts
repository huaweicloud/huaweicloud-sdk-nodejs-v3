import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ListCaResourceInstancesRequest {
    public body?: ListResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourceInstancesRequestBody): ListCaResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}