import { CreatePasswordRequestBody } from './CreatePasswordRequestBody';


export class GenerateRandomPasswordRequest {
    public body?: CreatePasswordRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePasswordRequestBody): GenerateRandomPasswordRequest {
        this['body'] = body;
        return this;
    }
}