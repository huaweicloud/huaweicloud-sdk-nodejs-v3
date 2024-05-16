import { SearchSharedPrincipalsReqBody } from './SearchSharedPrincipalsReqBody';


export class SearchSharedPrincipalsRequest {
    public body?: SearchSharedPrincipalsReqBody;
    public constructor() { 
    }
    public withBody(body: SearchSharedPrincipalsReqBody): SearchSharedPrincipalsRequest {
        this['body'] = body;
        return this;
    }
}