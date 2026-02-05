import { GenerateSpeechRequestBody } from './GenerateSpeechRequestBody';


export class GenerateSpeechRequest {
    public body?: GenerateSpeechRequestBody;
    public constructor() { 
    }
    public withBody(body: GenerateSpeechRequestBody): GenerateSpeechRequest {
        this['body'] = body;
        return this;
    }
}