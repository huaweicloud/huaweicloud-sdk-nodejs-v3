import { UpdateL7policyReq } from './UpdateL7policyReq';


export class UpdateL7policiesRequestBody {
    public l7policy?: UpdateL7policyReq;
    public constructor(l7policy?: UpdateL7policyReq) { 
        this['l7policy'] = l7policy;
    }
    public withL7policy(l7policy: UpdateL7policyReq): UpdateL7policiesRequestBody {
        this['l7policy'] = l7policy;
        return this;
    }
}