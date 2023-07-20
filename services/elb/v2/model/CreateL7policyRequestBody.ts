import { CreateL7policyReq } from './CreateL7policyReq';


export class CreateL7policyRequestBody {
    public l7policy?: CreateL7policyReq;
    public constructor(l7policy?: CreateL7policyReq) { 
        this['l7policy'] = l7policy;
    }
    public withL7policy(l7policy: CreateL7policyReq): CreateL7policyRequestBody {
        this['l7policy'] = l7policy;
        return this;
    }
}