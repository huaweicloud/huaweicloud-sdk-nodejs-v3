import { CreateP2PSiteNetworkRequestBody } from './CreateP2PSiteNetworkRequestBody';


export class CreateP2PSiteNetworkRequest {
    public body?: CreateP2PSiteNetworkRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateP2PSiteNetworkRequestBody): CreateP2PSiteNetworkRequest {
        this['body'] = body;
        return this;
    }
}