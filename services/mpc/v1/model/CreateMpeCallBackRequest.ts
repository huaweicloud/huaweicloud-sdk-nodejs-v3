import { MpeCallBackReq } from './MpeCallBackReq';


export class CreateMpeCallBackRequest {
    public body?: MpeCallBackReq;
    public constructor() { 
    }
    public withBody(body: MpeCallBackReq): CreateMpeCallBackRequest {
        this['body'] = body;
        return this;
    }
}