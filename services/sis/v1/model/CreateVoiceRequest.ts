import { RegisterVoiceReq } from './RegisterVoiceReq';


export class CreateVoiceRequest {
    public body?: RegisterVoiceReq;
    public constructor() { 
    }
    public withBody(body: RegisterVoiceReq): CreateVoiceRequest {
        this['body'] = body;
        return this;
    }
}