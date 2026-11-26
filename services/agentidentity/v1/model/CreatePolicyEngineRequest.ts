import { CreatePolicyEngineReqBody } from './CreatePolicyEngineReqBody';


export class CreatePolicyEngineRequest {
    public body?: CreatePolicyEngineReqBody;
    public constructor() { 
    }
    public withBody(body: CreatePolicyEngineReqBody): CreatePolicyEngineRequest {
        this['body'] = body;
        return this;
    }
}