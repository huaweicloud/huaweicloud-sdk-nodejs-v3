import { CelebrityRecognitionReq } from './CelebrityRecognitionReq';


export class RunCelebrityRecognitionRequest {
    public body?: CelebrityRecognitionReq;
    public constructor() { 
    }
    public withBody(body: CelebrityRecognitionReq): RunCelebrityRecognitionRequest {
        this['body'] = body;
        return this;
    }
}