import { CreateDisasterRecoveryReq } from './CreateDisasterRecoveryReq';


export class CreateDisasterRecoveryRequest {
    public body?: CreateDisasterRecoveryReq;
    public constructor() { 
    }
    public withBody(body: CreateDisasterRecoveryReq): CreateDisasterRecoveryRequest {
        this['body'] = body;
        return this;
    }
}