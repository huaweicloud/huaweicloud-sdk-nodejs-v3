import { CreateTransitSubnetRequestBody } from './CreateTransitSubnetRequestBody';


export class CreateTransitSubnetRequest {
    public body?: CreateTransitSubnetRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTransitSubnetRequestBody): CreateTransitSubnetRequest {
        this['body'] = body;
        return this;
    }
}