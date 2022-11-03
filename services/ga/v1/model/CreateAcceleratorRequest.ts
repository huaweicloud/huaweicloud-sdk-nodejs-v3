import { CreateAcceleratorRequestBody } from './CreateAcceleratorRequestBody';


export class CreateAcceleratorRequest {
    public body?: CreateAcceleratorRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAcceleratorRequestBody): CreateAcceleratorRequest {
        this['body'] = body;
        return this;
    }
}