import { Algorithm } from './Algorithm';


export class CreateAlgorithmRequest {
    public body?: Algorithm;
    public constructor() { 
    }
    public withBody(body: Algorithm): CreateAlgorithmRequest {
        this['body'] = body;
        return this;
    }
}