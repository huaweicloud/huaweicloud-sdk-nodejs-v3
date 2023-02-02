import { DisassociateKeypairRequestBody } from './DisassociateKeypairRequestBody';


export class DisassociateKeypairRequest {
    public body?: DisassociateKeypairRequestBody;
    public constructor() { 
    }
    public withBody(body: DisassociateKeypairRequestBody): DisassociateKeypairRequest {
        this['body'] = body;
        return this;
    }
}