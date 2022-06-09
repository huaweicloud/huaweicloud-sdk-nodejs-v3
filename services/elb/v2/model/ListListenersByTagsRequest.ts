import { ListListenersByTagsRequestBody } from './ListListenersByTagsRequestBody';


export class ListListenersByTagsRequest {
    public body?: ListListenersByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListListenersByTagsRequestBody): ListListenersByTagsRequest {
        this['body'] = body;
        return this;
    }
}