import { CreateInstanceByEngineReq } from './CreateInstanceByEngineReq';


export class CreatePostPaidInstanceForRocketMqRequest {
    public body?: CreateInstanceByEngineReq;
    public constructor() { 
    }
    public withBody(body: CreateInstanceByEngineReq): CreatePostPaidInstanceForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}