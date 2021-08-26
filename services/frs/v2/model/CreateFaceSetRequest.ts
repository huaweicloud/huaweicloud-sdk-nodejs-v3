import { CreateFaceSetReq } from './CreateFaceSetReq';


export class CreateFaceSetRequest {
    public body?: CreateFaceSetReq;
    public constructor() { 
    }
    public withBody(body: CreateFaceSetReq): CreateFaceSetRequest {
        this['body'] = body;
        return this;
    }
}