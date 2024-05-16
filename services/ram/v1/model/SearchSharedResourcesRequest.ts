import { SearchSharedResourcesReqBody } from './SearchSharedResourcesReqBody';


export class SearchSharedResourcesRequest {
    public body?: SearchSharedResourcesReqBody;
    public constructor() { 
    }
    public withBody(body: SearchSharedResourcesReqBody): SearchSharedResourcesRequest {
        this['body'] = body;
        return this;
    }
}