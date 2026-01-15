import { ListInstancesRequestBody } from './ListInstancesRequestBody';


export class ListInstancesRequest {
    public body?: ListInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListInstancesRequestBody): ListInstancesRequest {
        this['body'] = body;
        return this;
    }
}