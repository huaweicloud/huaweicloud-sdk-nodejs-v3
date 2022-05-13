import { HealthCodeRequestBody } from './HealthCodeRequestBody';


export class RecognizeHealthCodeRequest {
    public body?: HealthCodeRequestBody;
    public constructor() { 
    }
    public withBody(body: HealthCodeRequestBody): RecognizeHealthCodeRequest {
        this['body'] = body;
        return this;
    }
}