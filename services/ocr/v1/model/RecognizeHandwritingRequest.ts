import { HandwritingRequestBody } from './HandwritingRequestBody';


export class RecognizeHandwritingRequest {
    public body?: HandwritingRequestBody;
    public constructor() { 
    }
    public withBody(body: HandwritingRequestBody): RecognizeHandwritingRequest {
        this['body'] = body;
        return this;
    }
}