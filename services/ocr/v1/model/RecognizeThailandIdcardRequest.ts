import { ThailandIdcardRequestBody } from './ThailandIdcardRequestBody';


export class RecognizeThailandIdcardRequest {
    public body?: ThailandIdcardRequestBody;
    public constructor() { 
    }
    public withBody(body: ThailandIdcardRequestBody): RecognizeThailandIdcardRequest {
        this['body'] = body;
        return this;
    }
}