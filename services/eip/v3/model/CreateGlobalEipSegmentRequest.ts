import { CreateGlobalEipSegmentRequestBody } from './CreateGlobalEipSegmentRequestBody';


export class CreateGlobalEipSegmentRequest {
    public body?: CreateGlobalEipSegmentRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateGlobalEipSegmentRequestBody): CreateGlobalEipSegmentRequest {
        this['body'] = body;
        return this;
    }
}