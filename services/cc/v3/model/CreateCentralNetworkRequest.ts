import { CreateCentralNetworkRequestBody } from './CreateCentralNetworkRequestBody';


export class CreateCentralNetworkRequest {
    public body?: CreateCentralNetworkRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCentralNetworkRequestBody): CreateCentralNetworkRequest {
        this['body'] = body;
        return this;
    }
}