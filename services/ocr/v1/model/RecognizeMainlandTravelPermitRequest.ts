import { MainlandTravelPermitRequestBody } from './MainlandTravelPermitRequestBody';


export class RecognizeMainlandTravelPermitRequest {
    public body?: MainlandTravelPermitRequestBody;
    public constructor() { 
    }
    public withBody(body: MainlandTravelPermitRequestBody): RecognizeMainlandTravelPermitRequest {
        this['body'] = body;
        return this;
    }
}