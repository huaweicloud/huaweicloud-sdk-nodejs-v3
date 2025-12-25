import { CreateVifPeerDetectionRequestBody } from './CreateVifPeerDetectionRequestBody';


export class CreateVifPeerDetectionRequest {
    public body?: CreateVifPeerDetectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVifPeerDetectionRequestBody): CreateVifPeerDetectionRequest {
        this['body'] = body;
        return this;
    }
}