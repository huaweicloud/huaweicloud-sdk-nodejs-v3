import { CreateVifPeerRequestBody } from './CreateVifPeerRequestBody';


export class CreateVifPeerRequest {
    public body?: CreateVifPeerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVifPeerRequestBody): CreateVifPeerRequest {
        this['body'] = body;
        return this;
    }
}