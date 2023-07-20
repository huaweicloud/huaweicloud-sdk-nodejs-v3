import { CreateIefMessageChannelReq } from './CreateIefMessageChannelReq';


export class CreateIefMessageChannelRequest {
    public body?: CreateIefMessageChannelReq;
    public constructor() { 
    }
    public withBody(body: CreateIefMessageChannelReq): CreateIefMessageChannelRequest {
        this['body'] = body;
        return this;
    }
}