import { CreateHostedDirectConnectRequestBody } from './CreateHostedDirectConnectRequestBody';


export class CreateHostedDirectConnectRequest {
    public body?: CreateHostedDirectConnectRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateHostedDirectConnectRequestBody): CreateHostedDirectConnectRequest {
        this['body'] = body;
        return this;
    }
}