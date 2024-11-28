import { AssociateAliasRequestBody } from './AssociateAliasRequestBody';


export class AssociateAliasRequest {
    public body?: AssociateAliasRequestBody;
    public constructor() { 
    }
    public withBody(body: AssociateAliasRequestBody): AssociateAliasRequest {
        this['body'] = body;
        return this;
    }
}