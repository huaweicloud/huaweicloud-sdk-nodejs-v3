import { HkIdCardRequestBody } from './HkIdCardRequestBody';


export class RecognizeHkIdCardRequest {
    public body?: HkIdCardRequestBody;
    public constructor() { 
    }
    public withBody(body: HkIdCardRequestBody): RecognizeHkIdCardRequest {
        this['body'] = body;
        return this;
    }
}