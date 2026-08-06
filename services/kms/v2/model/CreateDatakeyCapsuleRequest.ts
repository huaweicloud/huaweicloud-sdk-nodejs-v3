import { CreateDatakeyCapsuleRequestBody } from './CreateDatakeyCapsuleRequestBody';


export class CreateDatakeyCapsuleRequest {
    public body?: CreateDatakeyCapsuleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDatakeyCapsuleRequestBody): CreateDatakeyCapsuleRequest {
        this['body'] = body;
        return this;
    }
}