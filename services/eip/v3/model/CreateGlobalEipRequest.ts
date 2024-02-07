import { CreateGlobalEipRequestBody } from './CreateGlobalEipRequestBody';


export class CreateGlobalEipRequest {
    public body?: CreateGlobalEipRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateGlobalEipRequestBody): CreateGlobalEipRequest {
        this['body'] = body;
        return this;
    }
}