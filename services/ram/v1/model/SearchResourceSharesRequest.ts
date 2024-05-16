import { SearchResourceSharesReqBody } from './SearchResourceSharesReqBody';


export class SearchResourceSharesRequest {
    public body?: SearchResourceSharesReqBody;
    public constructor() { 
    }
    public withBody(body: SearchResourceSharesReqBody): SearchResourceSharesRequest {
        this['body'] = body;
        return this;
    }
}