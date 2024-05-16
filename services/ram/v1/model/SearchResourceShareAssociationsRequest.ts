import { SearchResourceShareAssociationsReqBody } from './SearchResourceShareAssociationsReqBody';


export class SearchResourceShareAssociationsRequest {
    public body?: SearchResourceShareAssociationsReqBody;
    public constructor() { 
    }
    public withBody(body: SearchResourceShareAssociationsReqBody): SearchResourceShareAssociationsRequest {
        this['body'] = body;
        return this;
    }
}