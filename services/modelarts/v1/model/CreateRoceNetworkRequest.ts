import { ServerRoceNetworkRequest } from './ServerRoceNetworkRequest';


export class CreateRoceNetworkRequest {
    public body?: ServerRoceNetworkRequest;
    public constructor() { 
    }
    public withBody(body: ServerRoceNetworkRequest): CreateRoceNetworkRequest {
        this['body'] = body;
        return this;
    }
}