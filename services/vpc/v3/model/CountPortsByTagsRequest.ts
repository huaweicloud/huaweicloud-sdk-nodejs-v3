import { CountPortsByTagsRequestBody } from './CountPortsByTagsRequestBody';


export class CountPortsByTagsRequest {
    public body?: CountPortsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: CountPortsByTagsRequestBody): CountPortsByTagsRequest {
        this['body'] = body;
        return this;
    }
}