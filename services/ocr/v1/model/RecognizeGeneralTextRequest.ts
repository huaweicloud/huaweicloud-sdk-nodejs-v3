import { GeneralTextRequestBody } from './GeneralTextRequestBody';


export class RecognizeGeneralTextRequest {
    public body?: GeneralTextRequestBody;
    public constructor() { 
    }
    public withBody(body: GeneralTextRequestBody): RecognizeGeneralTextRequest {
        this['body'] = body;
        return this;
    }
}