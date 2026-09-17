import { ListInstancesRequestBody } from './ListInstancesRequestBody';


export class ListInstancesApiRequest {
    public body?: ListInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListInstancesRequestBody): ListInstancesApiRequest {
        this['body'] = body;
        return this;
    }
}