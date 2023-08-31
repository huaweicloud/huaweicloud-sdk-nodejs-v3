import { CreateTransitIpRequestBody } from './CreateTransitIpRequestBody';


export class CreateTransitIpRequest {
    public body?: CreateTransitIpRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTransitIpRequestBody): CreateTransitIpRequest {
        this['body'] = body;
        return this;
    }
}