import { ListRetirableGrantsRequestBody } from './ListRetirableGrantsRequestBody';


export class ListRetirableGrantsRequest {
    public body?: ListRetirableGrantsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListRetirableGrantsRequestBody): ListRetirableGrantsRequest {
        this['body'] = body;
        return this;
    }
}