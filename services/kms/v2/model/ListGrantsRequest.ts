import { ListGrantsRequestBody } from './ListGrantsRequestBody';


export class ListGrantsRequest {
    public body?: ListGrantsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListGrantsRequestBody): ListGrantsRequest {
        this['body'] = body;
        return this;
    }
}