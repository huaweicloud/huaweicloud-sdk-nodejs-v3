import { NetworkCreationRequest } from './NetworkCreationRequest';


export class CreateNetworkRequest {
    public body?: NetworkCreationRequest;
    public constructor() { 
    }
    public withBody(body: NetworkCreationRequest): CreateNetworkRequest {
        this['body'] = body;
        return this;
    }
}