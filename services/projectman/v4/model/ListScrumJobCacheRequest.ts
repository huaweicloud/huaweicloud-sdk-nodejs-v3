import { ListCacheDatasRequest } from './ListCacheDatasRequest';


export class ListScrumJobCacheRequest {
    public body?: ListCacheDatasRequest;
    public constructor() { 
    }
    public withBody(body: ListCacheDatasRequest): ListScrumJobCacheRequest {
        this['body'] = body;
        return this;
    }
}