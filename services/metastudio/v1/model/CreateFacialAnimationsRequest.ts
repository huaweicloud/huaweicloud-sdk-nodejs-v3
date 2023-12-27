import { CreateFASReq } from './CreateFASReq';


export class CreateFacialAnimationsRequest {
    public body?: CreateFASReq;
    public constructor() { 
    }
    public withBody(body: CreateFASReq): CreateFacialAnimationsRequest {
        this['body'] = body;
        return this;
    }
}