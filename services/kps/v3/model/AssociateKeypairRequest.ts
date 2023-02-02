import { AssociateKeypairRequestBody } from './AssociateKeypairRequestBody';


export class AssociateKeypairRequest {
    public body?: AssociateKeypairRequestBody;
    public constructor() { 
    }
    public withBody(body: AssociateKeypairRequestBody): AssociateKeypairRequest {
        this['body'] = body;
        return this;
    }
}