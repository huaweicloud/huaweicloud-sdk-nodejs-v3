import { PassportRequestBody } from './PassportRequestBody';


export class RecognizePassportRequest {
    public body?: PassportRequestBody;
    public constructor() { 
    }
    public withBody(body: PassportRequestBody): RecognizePassportRequest {
        this['body'] = body;
        return this;
    }
}