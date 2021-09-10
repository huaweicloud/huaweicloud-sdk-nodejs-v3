import { VinRequestBody } from './VinRequestBody';


export class RecognizeVinRequest {
    public body?: VinRequestBody;
    public constructor() { 
    }
    public withBody(body: VinRequestBody): RecognizeVinRequest {
        this['body'] = body;
        return this;
    }
}