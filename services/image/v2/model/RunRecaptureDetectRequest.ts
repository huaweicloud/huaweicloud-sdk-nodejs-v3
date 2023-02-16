import { RecaptureDetectReq } from './RecaptureDetectReq';


export class RunRecaptureDetectRequest {
    public body?: RecaptureDetectReq;
    public constructor() { 
    }
    public withBody(body: RecaptureDetectReq): RunRecaptureDetectRequest {
        this['body'] = body;
        return this;
    }
}