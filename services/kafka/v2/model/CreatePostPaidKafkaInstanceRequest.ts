import { CreateInstanceByEngineReq } from './CreateInstanceByEngineReq';


export class CreatePostPaidKafkaInstanceRequest {
    public body?: CreateInstanceByEngineReq;
    public constructor() { 
    }
    public withBody(body: CreateInstanceByEngineReq): CreatePostPaidKafkaInstanceRequest {
        this['body'] = body;
        return this;
    }
}