import { CreateMasterSlavePoolRequestBody } from './CreateMasterSlavePoolRequestBody';


export class CreateMasterSlavePoolRequest {
    public body?: CreateMasterSlavePoolRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateMasterSlavePoolRequestBody): CreateMasterSlavePoolRequest {
        this['body'] = body;
        return this;
    }
}