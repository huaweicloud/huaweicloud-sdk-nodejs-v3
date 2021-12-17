import { ChileIdCardRequestBody } from './ChileIdCardRequestBody';


export class RecognizeChileIdCardRequest {
    public body?: ChileIdCardRequestBody;
    public constructor() { 
    }
    public withBody(body: ChileIdCardRequestBody): RecognizeChileIdCardRequest {
        this['body'] = body;
        return this;
    }
}