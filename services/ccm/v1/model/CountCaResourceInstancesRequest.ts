import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class CountCaResourceInstancesRequest {
    public body?: ListResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourceInstancesRequestBody): CountCaResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}