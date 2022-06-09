import { TextDetectionReq } from './TextDetectionReq';


export class RunTextModerationRequest {
    public body?: TextDetectionReq;
    public constructor() { 
    }
    public withBody(body: TextDetectionReq): RunTextModerationRequest {
        this['body'] = body;
        return this;
    }
}