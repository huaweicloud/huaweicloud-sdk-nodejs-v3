import { CreateFlowLogReqBody } from './CreateFlowLogReqBody';


export class CreateFlowLogRequest {
    public body?: CreateFlowLogReqBody;
    public constructor() { 
    }
    public withBody(body: CreateFlowLogReqBody): CreateFlowLogRequest {
        this['body'] = body;
        return this;
    }
}